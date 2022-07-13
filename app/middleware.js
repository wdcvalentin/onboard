import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
    console.log('[middleware] Protection route')
    const session = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
        return NextResponse.redirect('http://localhost:3000/login')
    }

    return NextResponse.next()
}

// Supports both a single string value or an array of matchers
export const config = {
    matcher: ['/dashboard/:path*'],
}