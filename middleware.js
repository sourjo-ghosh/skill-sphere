import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.getSession({
    headers: await headers()
  });

  if (session) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(
      new URL("/signup?message=please-login", request.url),
    );
  }
}

export const config = {
  matcher: ["/courses", "/courses/:path*", "/user-profile"],
};
