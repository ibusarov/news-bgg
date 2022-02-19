import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta HTTP-EQUIV='Content-Language' content='BG' />
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
      <div className='page-container'>
        <Toolbar />
        <div className={styles.main}>
          <h1>Водещите новини само на български език</h1>
          <h3>Бъдете винаги осведомени с топ новини на български</h3>
          <div className={styles.start}>
            <Image
              src='/giraffe.jpg'
              alt='Employee of the month'
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
