import { NextResponse } from 'next/server';

export default function middleware(req) {
    const { pathname } = req.nextUrl;
  
    // Log the middleware execution for debugging
    console.log(`Middleware executed for: ${pathname}`);
  
    // Allow all requests to proceed
    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico|webpack-hmr).*)'], // Exclude internal Next.js routes and static assets
};
