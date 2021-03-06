import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>David's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="David Vidović" />
      <main>
        
        <p className="description">
          test! commit
        </p>
      </main>

      <Footer />
    </div>
  )
}
