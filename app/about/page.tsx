'use client'

import Link from '@/node_modules/next/link'
import styles from './page.module.css'
import { forwardRef } from 'react'
import PageTransition from '../components/transition/PageTransition'

function Inventory(ref) {
  return (
    <PageTransition ref={ref}>
      <main className={styles.main}>
      About
    </main>
    </PageTransition>
    
  )
}

export default forwardRef(Inventory)