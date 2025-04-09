import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
 
export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
	if (sessionCookie && (request.nextUrl.pathname === "/sign-in" || request.nextUrl.pathname === "/sign-up")) {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}
	return NextResponse.next();
}
 
export const config = {
	matcher: ["/dashboard", "/sign-up", "/sign-in"], 
};