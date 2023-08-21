'use client'
import styles from './page.module.scss'
import { forwardRef, useEffect, useState } from 'react'
import PageTransition from '../components/transition/PageTransition'

function Inventory({},ref) {
  const [items, setItems] = useState({})
  const [newItem, setNewItem] = useState('')

  useEffect(()=>{
    fetch('/api/inventory')
    .then((res) => res.json())
    .then((data) => {
      setItems(data.inventory)
    })
  },[])

  async function addItem(){
    fetch('/api/inventory',
      {
        method: 'POST',
        body: JSON.stringify({newItem: {category: newItem, name: "?", amount: 0}})
      }
    ).then((res) => res.json())
    .then((data) => {
      setItems(data.inventory)
    })
  }

  return (
    <PageTransition ref={ref}>
      <main className={styles.main}>
        Inventory
        <div className={styles.list}>
          {Object.keys(items).map(item=>
            <div className={styles.item}>{item} ({items[item].name}): {items[item].amount}</div>
          )}
        </div>
        <input type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)}></input>
        <button onClick={()=>addItem()}>Add Item</button>
      </main>
    </PageTransition>
    
  )
}

export default forwardRef(Inventory)