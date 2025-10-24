import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes using route matcher
// These routes require authentication and role-based authorization
const isProtectedRoute = createRouteMatcher([
  "/student(.*)",
  "/attorney(.*)",
  "/senate/dashboard(.*)",
  "/senate/meetings(.*)",
  "/senate/votes(.*)",
  "/dashboard(.*)",
  "/admin(.*)"
]);

/**
 * Middleware for role-based access control.
 * This middleware protects routes by verifying user roles
 * using Clerk session claims and redirects unauthorized users.
 */
export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // Check if user is authenticated
  // Redirect to sign-in if the user is not authenticated and trying to access a protected route
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  // Get user role from session claims (stored in Clerk publicMetadata)
  const userRole = sessionClaims?.role;
  console.log("User Role from Session:", userRole);

  /**
   * Super Admin Access Control:
   * Super Admins are allowed to access all routes without restriction.
   */
  if (userRole === "super_admin") {
    console.log("Super Admin Access Granted");
    return NextResponse.next();
  }

  /**
   * Attorney Access Control:
   * Attorneys are allowed to access Student pages.
   * This grants cross-role access for specific use cases.
   */
  if (
    isProtectedRoute(req) &&
    req.nextUrl.pathname.startsWith("/student") &&
    userRole === "attorney"
  ) {
    console.log("Attorney Access Granted to Student Page");
    return NextResponse.next();
  }

  /**
   * Role-Based Access Control:
   * Maps each role to its respective directory.
   * Only users with the corresponding role can access these directories.
   */
  const roleBasedRoutes = {
    student: "/student",
    attorney: "/attorney",
    senate_member: "/senate",
    senate_speaker: "/senate"
  };

  /**
   * Senate Access Control:
   * Both senate_member and senate_speaker are allowed to access /senate.
   * This grants shared access to the senate dashboard.
   */
  if (
    isProtectedRoute(req) &&
    req.nextUrl.pathname.startsWith("/senate") &&
    (userRole === "senate_member" || userRole === "senate_speaker")
  ) {
    return NextResponse.next();
  }

  /**
   * General Role-Based Access Validation:
   * Checks each route against the user's role.
   * Redirects to /unauthorized if the user does not have permission.
   */
  for (const [role, path] of Object.entries(roleBasedRoutes)) {
    if (
      isProtectedRoute(req) && 
      req.nextUrl.pathname.startsWith(path) && 
      userRole !== role
    ) {
      console.log(`Unauthorized access to ${path} by ${userRole}`);
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Allow access if all checks pass
  return NextResponse.next();
});

/**
 * Middleware Configuration:
 * Specifies which routes are protected and require role-based access control.
 */
export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/student/:path*", // Allow attorneys to access /student
    "/attorney/:path*",
    "/senate/dashboard/:path*",
    "/senate/meetings/:path*",
    "/senate/votes/:path*",
    "/dashboard/:path*",
    "/forum/:path*",
    "/admin/:path*"
  ],
};
