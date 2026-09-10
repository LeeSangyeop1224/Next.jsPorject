import Hello from './Hello'
import World from './World'
import { Suspense } from 'react'
import Loader from '@/components/Loader'
import { ErrorBoundary } from 'react-error-boundary'

export default async function Async() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <>
      <h1>Async Page!</h1>
      <Suspense
        fallback={
          <Loader
            color="red"
            className="relative"
          />
        }>
        <Hello />
      </Suspense>
      <ErrorBoundary fallback={<div>에러 발생!</div>}>
        <Suspense
          fallback={
            <Loader
              color="blue"
              className="relative"
            />
          }>
          <World />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
