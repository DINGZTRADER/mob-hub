import { type NextRequest, NextResponse } from "next/server";

const canonicalHost = "mob-hub.com";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname !== `www.${canonicalHost}`) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.hostname = canonicalHost;

  return NextResponse.redirect(canonicalUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
