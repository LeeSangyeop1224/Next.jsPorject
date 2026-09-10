export interface MovieSimples {
  imdbID: string
  Title: string
  Poster: string
}

export interface MovieDetails {
  imdbID: string
  Title: string
  Plot: 'full' | 'short'
  Poster: string
}
