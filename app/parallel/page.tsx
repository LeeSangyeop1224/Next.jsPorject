export default async function Parallels() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      <h1>Parallel Page!</h1>
    </>
  )
}
