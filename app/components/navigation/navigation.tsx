import Link from '@/node_modules/next/link'
import styles from './navigation.module.scss'
import React from 'react'
import {usePathname} from 'next/navigation'
export default function Navigation({}) {
  const pathname = usePathname();
  const linkStateStyle =(pageUrl)=> {return pathname === pageUrl ? styles.itemActive : styles.item};
  return (
    <div className={styles.container}>
        <Link className={linkStateStyle("/")} href={"/"}>Home</Link>
        <Link className={linkStateStyle("/inventory")} href={"inventory"}>Inventory</Link>
        <Link className={linkStateStyle("/about")} href={"about"}>About</Link>
    </div>
  )
}