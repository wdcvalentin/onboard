import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
    console.log('[middleware] Protection route')
    const session = await getToken({ req: req, secret: process.env.SECRET });

    if (!session) {
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
