import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if we're on the client side and have access to localStorage
  if (typeof window !== 'undefined') {
    const role = localStorage.getItem('role');
    
    // If accessing patient dashboard without patient role
    if (request.nextUrl.pathname.startsWith('/patient/dashboard') && role !== 'Patient') {
      return NextResponse.redirect(new URL('/patient-login', request.url));
    }
    
    // If accessing provider dashboard without provider role
    if (request.nextUrl.pathname.startsWith('/provider/dashboard') && role !== 'Provider') {
      return NextResponse.redirect(new URL('/provider-login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/patient/dashboard/:path*', '/provider/dashboard/:path*'],
};
