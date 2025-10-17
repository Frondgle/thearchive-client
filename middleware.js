import { NextResponse } from 'next/server';

export default function middleware(req) {
    const { pathname } = req.nextUrl;

    // List of paths to block
    const blockedPaths = [
        '/info.php',
        '/config.json',
        '/.env',
        '/telescope/requests',
        '/server-status',
        '/.git/config',
        '/_all_dbs',
        '/login.action',
    ];

    if (blockedPaths.includes(pathname)) {
        console.log(`Blocked request for: ${pathname}`);
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*', // Apply middleware to all routes
};