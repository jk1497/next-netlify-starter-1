import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Drop from '@components/Dropdown'
// import App from'@components/Wordlist'
import CsvReader from'@components/CsvReader'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
      <Drop>
      </Drop>
      <CsvReader/>
        <Header title="Believe in M" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
