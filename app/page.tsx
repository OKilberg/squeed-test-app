import styles from './page.module.scss'
import PageTransition from './components/transition/PageTransition'
import { forwardRef } from 'react'

function Home({},ref) {
  return (
    <PageTransition ref={ref}>
      <main className={styles.main}>
        Home
      </main>
    </PageTransition>
    
  )
}

export default forwardRef(Home)
