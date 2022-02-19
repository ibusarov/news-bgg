import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          Новини от България и света, актуална информация 24 часа в денонощието
        </title>

        <meta
          name='description'
          content='Новинарски сайт за новини от България и света на теми - спорт, технологии, социално-културни, здраве, криминалистика, автомобили, политика, животни, камили, жирафи, смях, забавни.'
        />
        <meta
          name='keywords'
          content='новини, спорт, технологии, социално-културни, здраве, криминалистика, автомобили, политика, животни, камили, жирафи, смях, забавни'
        />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
