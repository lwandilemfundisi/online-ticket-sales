import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
    const rsp = await fetch("https://localhost:444/bff/auth/user", {
        method: "GET",
        headers: {
            cookie: req.headers.get("cookie") || "",
            origin: "https://localhost:444",
        },
    });
    console.log("bff response status:", rsp.status);
    if (rsp.status != 200) {
        console.warn("Unauthorized response received, redirecting to login.");
        return await redirectToLogin(req);
    }
    return NextResponse.next();
}

function redirectToLogin(req: NextRequest) {
    const loginUrl = new URL("/bff/auth/login", req.url);
    loginUrl.searchParams.set('returnUrl', req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(loginUrl);
}

// Apply middleware to /cart routes 
export const config = { matcher: ["/cart/:path*"], };