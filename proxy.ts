import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
    const bffCookie = req.cookies.get("__Host-bff")?.value;
    if (!bffCookie) {
        return redirectToLogin(req);
    }

    try {
        const rsp = await fetch("bff/auth/user?slide=false");
        if (!rsp.ok) {
            return redirectToLogin(req);
        }

        const claims = await rsp.json();
        if (!(claims && claims.length > 0)) {
            return redirectToLogin(req);
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Error fetching user claims:", error);
        return redirectToLogin(req);
    }
}

function redirectToLogin(req: NextRequest) {
    const loginUrl = new URL("/bff/auth/login", req.url);
    loginUrl.searchParams.set('returnUrl', req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
}

// Apply middleware to /cart routes 
export const config = { matcher: ["/cart/:path*"], };