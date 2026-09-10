export default async function Hello() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <>
      <h1>Hello!</h1>
    </>
  )
}
