// 404.js
import styles from '../styles/EOM.module.css'
import Image from 'next/image'
import Toolbar from '../components/toolbar'


export default function FourOhFour() {
  return  (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Съжаляваме, но не намираме актуални статии</h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>Скоро ще се появим отново...</h3>
          {/* <h6>404</h6> */}
          <Image src="/camel.jpg" alt='404 or 500 Error' width={250} height={250} />
          <h1>Ние идваме....</h1>
        </div>
      </div>
    </div>
  )
}
