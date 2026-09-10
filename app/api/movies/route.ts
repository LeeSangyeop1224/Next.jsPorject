import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const max = searchParams.get('max')
  return NextResponse.json(`max 값은 ${max} 이다!`)
}

export async function PUT(request: NextRequest) {
  const { name } = await request.json()
  return NextResponse.json(`내 이름은 ${name}이다!`)
}
