import styles from '../styles/EOM.module.css'
import Image from 'next/image'
import Toolbar from '../components/toolbar'

const EOM = ({ employee }) => {
  //console.log(employee)
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Служители на месеца</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>Нашите топ пост ловци</h3>
          <h5>К§Ж Инжинери</h5>
          <Image src="/vasko.jpg" alt='Employee of the month' width={400} height={300} />
          <h4>Експерти по камилологистила и жирафология</h4>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
  )
  const employee = await apiResponse.json()

  return {
    props: {
      employee,
    },
  }
}
export default EOM