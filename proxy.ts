import "server-only"

import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest){
    const session = request.cookies.get('__Host-spa');
    if(!session){
        const loginUri = new URL('bff/account/login', request.url);
        loginUri.searchParams.set('returnUrl', request.nextUrl.pathname + request.nextUrl.search);
        return NextResponse.redirect(loginUri, { status: 303 })
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cart']
}