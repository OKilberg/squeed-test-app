'use client'
import Link from '@/node_modules/next/link'
import styles from './page.module.css'
import PageTransition from './components/transition/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main className={styles.main}>
      Home
    </main>
    </PageTransition>
    
  )
}
