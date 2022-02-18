import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'

const Toolbar = () => {
  const router = useRouter()
  
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Начало</div>
      <div onClick={() => router.push('/feed')}>Новини</div>
      <div
        onClick={() =>
          (window.location.href =
            'https://www.wildcamels.com/great-gobi-kids-corner/')
        }
      >
        Животни
      </div>
      <div onClick={() => router.push('/eom')}>Награди</div>
    </div>
  )
}

export default Toolbar
