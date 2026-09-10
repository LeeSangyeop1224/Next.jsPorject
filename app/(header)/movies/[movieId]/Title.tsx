'use client'
//import { Movie } from './page'
import type { MovieDetails } from '@/types/movie'

interface Props {
  movie: MovieDetails
}

export default function Title({ movie }: Props) {
  return <h1 onClick={() => console.log('clicked!')}>{movie.Title}</h1>
}
