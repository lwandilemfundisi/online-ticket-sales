import "server-only"

import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    try {
        const rsp = await fetch("bff/auth/user?slide=false");
        const claims = await rsp.json();
        if (!(claims && claims.length > 0)) {
            const loginUri = new URL('bff/auth/login', request.url);
            loginUri.searchParams.set('returnUrl', request.nextUrl.pathname + request.nextUrl.search);
            return NextResponse.redirect(loginUri, { status: 303 })
        }

    } catch (error) {
        console.error(error);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cart']
}