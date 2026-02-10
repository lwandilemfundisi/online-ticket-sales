import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const BFF_URL = "https://localhost:446";
// Your C# BFF URL 
export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    // Only secure /cart routes 
    if (pathname.startsWith("/cart")) {
        // Optional: check for session cookie, redirect to login if missing 
        const bffCookie = req.cookies.get("__Host-bff")?.value;
        if (!bffCookie) {
            const loginUrl = new URL("/bff/auth/login", req.url);
            loginUrl.searchParams.set('returnUrl', req.nextUrl.pathname + req.nextUrl.search);
            return NextResponse.redirect(loginUrl);
        }
        // Build BFF URL 
        const url = new URL(pathname, BFF_URL); url.search = req.nextUrl.search;
        // preserve query 
        // Forward request to BFF 
        const headers = new Headers();
        // Forward all headers except host (optional) 
        req.headers.forEach((value, key) => {
            if (key !== "host")
                headers.set(key, value);
        });

        // Forward cookies 
        headers.set("cookie", req.headers.get("cookie") || "");
        const bffRes = await fetch(url.toString(), {
            method: req.method,
            headers,
            body: ["GET", "HEAD"].includes(req.method) ? undefined : req.body,
        });

        // Build response 
        const resHeaders = new Headers();
        bffRes.headers.forEach((value, key) => { resHeaders.set(key, value); });
        const body = await bffRes.arrayBuffer();
        return new NextResponse(body, { status: bffRes.status, headers: resHeaders, });
    }

    // Pass through other requests 
    return NextResponse.next();
}

// Apply middleware to /cart routes 
export const config = { matcher: ["/cart/:path*"], };