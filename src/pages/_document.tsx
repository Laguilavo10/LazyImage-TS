import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Lazy Image</title>
      <link rel='shortcut icon' href='/favicon.svg' type='image/svg'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}