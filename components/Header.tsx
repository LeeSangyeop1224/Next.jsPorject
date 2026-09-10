import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/async">Async</Link>
      <Link href="/parallel">Parallel</Link>
    </header>
  )
}
