import styles from './page.module.css'
import { forwardRef } from 'react'
import PageTransition from '../components/transition/PageTransition'

function About({},ref) {
  return (
    <PageTransition ref={ref}>
      <main className={styles.main}>
        About
      </main>
    </PageTransition>
    
  )
}

export default forwardRef(About)