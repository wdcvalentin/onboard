import { NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
    console.log('[middleware] Protection route')
    console.log(`production: ${process.env.NEXT_PUBLIC_NODE_ENV === 'production'}`)
    const session = await getToken({ req: req, secret: process.env.SECRET });
    
    if (!session) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_NODE_ENV !== 'development' ? process.env.NEXTAUTH_URL : process.env.NEXT_PUBLIC_HOST_API_URL}/login`)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
}
