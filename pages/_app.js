import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Новини БГ</title>
        <meta name='description' content='Новини на български' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
 
}

export default MyApp
