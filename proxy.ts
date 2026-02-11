import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
    const bffCookie = req.cookies.get("__Host-bff")?.value;
    if (!bffCookie) {
        const loginUrl = new URL("/bff/auth/login", req.url);
        loginUrl.searchParams.set('returnUrl', req.nextUrl.pathname + req.nextUrl.search);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// Apply middleware to /cart routes 
export const config = { matcher: ["/cart/:path*"], };