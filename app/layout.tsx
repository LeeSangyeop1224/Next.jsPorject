import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // title: 'Next.js 프로젝트'
  title: {
    template: '%s| Next.js 프로젝트',
    default: 'Next.js 프로젝트'
  }
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ko"
      className={`antialiased`}>
      <head>
        <link
          rel="icon"
          href="/favicon.png"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
