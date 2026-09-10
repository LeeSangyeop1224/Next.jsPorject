'use client'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import { fetchMovie } from '@/serverActions'
import type { MovieDetails } from '@/types/movie'

interface SP {
  plot?: MovieDetails['Plot']
}

interface Props {
  params: Promise<{ movieId: string }>
  searchParams: Promise<SP>
}

export default function MovieDetailsPage({ params, searchParams }: Props) {
  const { movieId } = use(params)
  const { plot = 'short' }: SP = use(searchParams)
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    fetchMovie(movieId, plot).then(movie => setMovie(movie))
  }, [])

  // 에러 발생 예시
  //throw new Error('영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!')

  return (
    <>
      {movie && (
        <>
          <h1 onClick={() => console.log('clicked!')}>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={600}
            height={900}
          />
        </>
      )}
    </>
  )
}
