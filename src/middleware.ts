import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/proxy'

export async function middleware(request: NextRequest) {
  // Activate proxy
  return await updateSession(request)
}

export const config = {
  // Här bestämmer vi VILKA sidor som ska trigga proxyn 
  // (Standard är att köra på allt utom bilder/statiska filer)
  // What page trigger the proxy. 
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}