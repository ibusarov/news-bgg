import styles from '../styles/EOM.module.css'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import Head from 'next/head'
import Footer from '../components/footer'

const EOM = () => {
  //console.log(employee)
  return (
    <div className='page-container'>
      <Head>
        <title>Новини</title>
        <meta name='description' content='новини на български' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Toolbar />
      <div className={styles.main}>
        <h1>Снимка на месеца</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>От нашите топ пост ловци</h3>
          <h5>К&Ж Инженери</h5>
          <Image
            src='/camelsmile.jpg'
            alt='Employee of the month'
            width={400}
            height={300}
          />
          <h4>Експерти по камилологистика и жирафология</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// export const getServerSideProps = async (pageContext) => {
//   const apiResponse = await fetch(
//     'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
//   )
//   const employee = await apiResponse.json()

//   return {
//     props: {
//       employee,
//     },
//   }
// }
export default EOM
