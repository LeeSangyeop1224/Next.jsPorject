import SearchMovies from './SearchMovies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    siteName: 'Next.js 영화 검색 연습 프로젝트',
    title: '영화 검색',
    description: '최신 영화를 검색할 수 있습니다.',
    images: 'https://picsum.photos/1000/600'
  }
}

export default async function Page() {
  return (
    <>
      <SearchMovies />
    </>
  )
}
