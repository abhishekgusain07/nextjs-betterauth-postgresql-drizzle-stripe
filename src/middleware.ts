import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	// Skip middleware completely for API routes to avoid potential loops
	if (request.nextUrl.pathname.startsWith('/api')) {
		return NextResponse.next();
	}

	const sessionCookie = getSessionCookie(request);
	
	// First check if we're on auth pages
	if (request.nextUrl.pathname === "/sign-in" || request.nextUrl.pathname === "/sign-up") {
		// If we have a session, redirect to home
		if (sessionCookie) {
			return NextResponse.redirect(new URL("/", request.url));
		}
		// If no session, allow access to auth pages
		return NextResponse.next();
	}
	
	// For protected routes, require authentication
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	// At this point, we have an authenticated user
	// Now we need to check their onboarding status
	
	// Get current path and check if it's the onboarding page
	const isOnboardingPath = request.nextUrl.pathname === '/onboarding';
	
	// Skip onboarding checks for public/static assets
	if (request.nextUrl.pathname.match(/\.(js|css|svg|png|jpg|jpeg|gif|webp|ico)$/)) {
		return NextResponse.next();
	}

	try {
		// Make a direct API call to check onboarding status
		const statusUrl = new URL('/api/user/onboarding-status', request.url);
		const statusResponse = await fetch(statusUrl);
		
		if (!statusResponse.ok) {
			console.error('Failed to check onboarding status');
			return NextResponse.next(); // Proceed to avoid breaking the app
		}
		
		const { onboardingCompleted } = await statusResponse.json();
		
		// CASE 1: User has NOT completed onboarding
		if (onboardingCompleted === false) {
			// If not on onboarding page, redirect to onboarding
			if (!isOnboardingPath) {
				return NextResponse.redirect(new URL('/onboarding', request.url));
			}
			// If already on onboarding page, allow access
			return NextResponse.next();
		}
		
		// CASE 2: User HAS completed onboarding
		if (onboardingCompleted === true) {
			// If trying to access onboarding page again, redirect away
			if (isOnboardingPath) {
				return NextResponse.redirect(new URL('/dashboard', request.url));
			}
			// For all other pages, allow access
			return NextResponse.next();
		}
	} catch (error) {
		console.error('Error in onboarding check middleware:', error);
		// On error, proceed normally to avoid breaking the app
		return NextResponse.next();
	}
	
	// Default fallback
	return NextResponse.next();
}
 
export const config = {
	matcher: [
		// Include specific routes that need protection
		"/dashboard", 
		"/sign-up", 
		"/sign-in", 
		"/onboarding",
		// Include other routes, but exclude API routes and static files
		"/((?!_next/static|_next/image|favicon.ico|api/).+)"
	]
};