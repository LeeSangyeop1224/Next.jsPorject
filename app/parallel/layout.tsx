interface Props {
  children: React.ReactNode
  hello: React.ReactNode
  world: React.ReactNode
}

export default async function Layout({ children, hello, world }: Props) {
  return (
    <>
      {children}
      {hello}
      {world}
    </>
  )
}
