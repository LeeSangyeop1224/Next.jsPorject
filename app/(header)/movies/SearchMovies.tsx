'use client'
import { fetchMovies } from '@/serverActions'
import type { MovieSimples } from '@/types/movie'
import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata = {
  openGraph: {
    type: 'website',
    siteName: 'Next.js 영화 검색 연습 프로젝트',
    title: '영화 검색',
    description: '최신 영화를 검색할 수 있습니다.',
    images: 'https://picsum.photos/1000/600'
  }
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<MovieSimples[]>([])
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchText = formData.get('searchText') as string
    const movies = await fetchMovies(searchText)
    console.log(movies)
    setMovies(movies)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchText"
        />
        <button type="submit">검색</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link href={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
