'use client'

interface Props {
  error: Error
}

export default function Error({ error }: Props) {
  return <div>에러 발생! {error.message}</div>
}
