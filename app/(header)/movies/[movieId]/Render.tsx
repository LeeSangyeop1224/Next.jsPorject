'use cache'

import Image from 'next/image'
import Title from './Title'
import type { MovieDetails as Movie } from '@/types/movie'

interface Props {
  movie: Movie
}

export default async function Render({ movie }: Props) {
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
