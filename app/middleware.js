import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log('[middleware]')

}

// Supports both a single string value or an array of matchers
export const config = {
    matcher: ['/dashboard/:path*'],
}