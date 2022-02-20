import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'

const Toolbar = () => {
  const router = useRouter()
  
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Начало</div>
      <div onClick={() => router.push('/feed')} title='Актуални новини'>
        Новини
      </div>
      <div
        onClick={() =>
          (window.location.href =
            'https://www.nationalgeographic.bg/a/boi-s-kamili-nenadminata-atrakciya-v-turciya')
        }
        title='Забавни животни'
      >
        Животни
      </div>
      <div onClick={() => router.push('/eom')} title='Забавни снимки'>
        Награди
      </div>
    </div>
  )
}

export default Toolbar
