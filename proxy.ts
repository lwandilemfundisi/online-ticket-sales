import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(req: NextRequest) {
    const bffCookie = req.cookies.get("__Host-bff")?.value;
    if (!bffCookie) {
        return redirectToLogin(req);
    }
    console.info("BFF cookie found, proceeding to fetch user claims.");

    try {
        const rsp = await fetch("https://localhost:444/bff/auth/user", {
            method: "GET",
            headers: {
                cookie: req.headers.get("cookie") || "",
                origin: "https://localhost:444",
            },
        });
        console.info(`Fetch user claims response status: ${rsp.status}`);
        if (rsp.status === 401) {
            console.warn("Unauthorized response received, redirecting to login.");
            return clearBffCookie(req);
        } else if (!rsp.ok) {
            console.error(`Failed to fetch user claims: ${rsp.statusText}`);
            return clearBffCookie(req);
        }
        console.info("User claims fetched successfully, parsing response.");
        const userRsp = await rsp.json();
        console.info(`User claims: ${JSON.stringify(userRsp)}`);
        if (!(userRsp && userRsp.claims && userRsp.claims.length > 0)) {
            console.warn("No claims found in response, redirecting to login.");
            return redirectToLogin(req);
        }
        console.info("User claims are valid, allowing request to proceed.");
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

function clearBffCookie(req: NextRequest) {
    const response = redirectToLogin(req);
    for (const [name] of req.cookies) {
        response.cookies.delete(name);
    }
    return response;
}

// Apply middleware to /cart routes 
export const config = { matcher: ["/cart/:path*"], };