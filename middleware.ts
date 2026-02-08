import { NextRequest, NextResponse } from 'next/server';
import blockedData from './blocked-ips.json';

const blockedIPs = new Set(blockedData.blockedIPs.map((e: { ip: string }) => e.ip));

export function middleware(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  const clientIP = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || '';

  if (blockedIPs.has(clientIP)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*', '/'],
};
