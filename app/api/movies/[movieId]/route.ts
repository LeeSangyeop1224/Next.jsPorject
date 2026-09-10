import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface Context {
  params: Promise<{ movieId: string }>
}

export async function GET(request: NextRequest, context: Context) {
  const { searchParams } = request.nextUrl
  const { movieId } = await context.params
  const plot = searchParams.get('plot') || ''
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
  )
  const movie = await res.json()
  return NextResponse.json(movie)
}
