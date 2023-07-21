import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Gaetan Lusson" />
        <p className="description">
          This is a personal project to learn Next.js
          Also, I'm using Tailwind CSS for styling
          My name is gaetan and I'm a web developer
        </p>
      </main>

      <Footer />
    </div>
  )
}
