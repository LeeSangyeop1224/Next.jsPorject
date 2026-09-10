import type { MovieDetails as Movie } from '@/types/movie'
import Render from './Render'

interface SP {
  plot?: Movie['Plot']
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
    `${process.env.NEXT_PUBLIC_URL}/api/movies/${movieId}?plot=${plot}`
    //`https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${movieId}&plot=${plot}`
  )
  const movie: Movie = await res.json()

  // 에러 발생 예시
  //throw new Error('영화 상세 정보를 가져오다가 알 수 없는 문제가 발생했습니다. 나중에 다시 시도해 보세요!')

  return (
    <>
      <Render movie={movie} />
    </>
  )
}
