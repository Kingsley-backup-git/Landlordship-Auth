import { NextResponse, type NextRequest } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthenticated = checkAuthentication(request);
  const isProtectedRoutes = (path.startsWith("/dashboard") || path.startsWith("/properties"));
  try {
 

       if (isAuthenticated && (path.startsWith("/auth/signin") || path.startsWith("/auth/signup"))) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/dashboard/overview", request.nextUrl));
}
else if (!isAuthenticated && isProtectedRoutes) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
}

else if (!isAuthenticated && path.startsWith("/auth/setup")) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL("/auth/signin", request.nextUrl));
}

       else if (
    isAuthenticated &&
    (path.startsWith("/auth/signin") || path.startsWith("/auth/signup"))
  ) {
    // Redirect authenticated users to dashboard
    return NextResponse.redirect(
      new URL("/dashboard/overview", request.nextUrl),
    );
  }
  } catch (error) {
    console.log(error)
  }
  

  return NextResponse.next();
}

export function checkAuthentication(request: NextRequest): boolean {
  const token = request.cookies.get("token")?.value;


  if (!token || token === undefined) return false;

  if (token && isTokenValid(token)) return true;

  if (token &&  !isTokenValid(token))
    return false;

  return false;
}

function isTokenValid(token?: string): boolean {
  if (!token) return false;
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return Date.now() < decoded.exp * 1000;
  } catch (err) {
    console.error("Invalid token:", err);
    return false;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
