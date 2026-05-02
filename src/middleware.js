import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const session = await auth.api.getSession({
        headers: req.headers,
    });

    const { pathname } = req.nextUrl;

    const isLoginPage = pathname === "/login";
    const isRegisterPage = pathname === "/register";

    // যদি login না থাকে → protected route block
    if (!session && !isLoginPage && !isRegisterPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/products/:path*",
        "/my-profile/:path*",
    ],
};