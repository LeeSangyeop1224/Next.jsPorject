import Image from 'next/image'
import Title from './Title'

export interface Movie {
  imdbID: string
  Title: string
  Plot: string
  Poster: string
}

interface SP {
  plot?: 'short' | 'full'
}

interface Props {
  params: Promise<{ movieId: string }>
  searchParams: Promise<SP>
}

export default async function MovieDetailsPage({
  params,
  searchParams
}: Props) {
  const { movieId } = await params
  const { plot = 'short' }: SP = await searchParams
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
  )
  const movie: Movie = await res.json()

  // 에러 발생 예시
  //throw new Error('영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!')

  return (
    <>
      <Title movie={movie} />
      <p>{movie.Plot}</p>
      <Image
        src={movie.Poster}
        alt={movie.Title}
        width={600}
        height={900}
      />
    </>
  )
}
