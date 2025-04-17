// A lightweight version of the auth client for Edge Runtime (middleware)
// This avoids importing the database which causes Node.js API errors

// Interface to match the user data structure we need
interface User {
  id: string;
  name?: string;
  email: string;
  onboardingCompleted?: boolean;
}

interface Session {
  user: User;
}

// Simple function to parse the session directly from a request
// without requiring database access
export function getEdgeSession(request: Request): Session | null {
  try {
    // Get auth cookie name - better-auth uses "ba-session" by default
    const cookieName = "better-auth.session_token";
    
    // Get cookie from the request headers
    const cookieHeader = request.headers.get('cookie');
    if (!cookieHeader) return null;
    
    // Parse cookies from header
    const cookies = parseCookies(cookieHeader);
    const authCookie = cookies[cookieName];
    
    if (!authCookie) {
      return null;
    }
    
    // For JWT-based sessions, decode it directly
    const payload = authCookie.split('.')[1];
    if (!payload) return null;
    
    // Decode base64
    const decoded = atob(payload);
    const sessionData = JSON.parse(decoded);
    
    // Extract user data including onboarding status
    return {
      user: {
        id: sessionData.sub || sessionData.id || sessionData.userId,
        email: sessionData.email,
        name: sessionData.name,
        onboardingCompleted: sessionData.onboardingCompleted
      }
    };
  } catch (error) {
    console.error("Error parsing edge session:", error);
    return null;
  }
}

// Helper function to parse cookies from a cookie header string
function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  
  cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      const name = parts[0].trim();
      const value = parts.slice(1).join('=').trim();
      cookies[name] = decodeURIComponent(value);
    }
  });
  
  return cookies;
} 