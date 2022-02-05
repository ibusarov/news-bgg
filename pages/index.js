import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Новини</title>
        <meta name='description' content='новини на български' />
        <link rel='icon' href='/favicon.ico' />
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
    </div>
  )
}
