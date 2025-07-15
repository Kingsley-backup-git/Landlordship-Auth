import { NextResponse, type NextRequest } from 'next/server'
import {  jwtDecode } from 'jwt-decode';
export function middleware(request: NextRequest) { 
     const path = request.nextUrl.pathname;
      const isAuthenticated = checkAuthentication(request);
       const isProtectedRoutes = path.startsWith('/dashboard')
console.log(isAuthenticated)
       if (!isAuthenticated && isProtectedRoutes) {

    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL('/auth/signin', request.nextUrl));
  }
    else if (isAuthenticated  && (path.startsWith('/auth/signin') || path.startsWith('/auth/signup'))) {
    // Redirect authenticated users to dashboard
    return NextResponse.redirect(new URL('/dashboard/overview', request.nextUrl));
  }

    return NextResponse.next();
}



export function checkAuthentication(request: NextRequest): boolean {
  const token = request.cookies.get('refreshToken')
console.log(token)
  if (!token) {
    return false
  }
  /* Extract expiry time from token */
  const tokenExpiry = getTokenExpiry(token.value) as string | number
  const expiryDate = new Date(parseFloat(tokenExpiry as string) * 1000);



  if (!tokenExpiry) {
    return false
  }
  if (new Date() > expiryDate) {
    // Token has expired, log out the user
    return false
  }
  return true;
}

function getTokenExpiry(token: string) {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken?.exp;
  } catch (err) {
    console.error('Error decoding token:', err);
    return null;
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)',],
}
