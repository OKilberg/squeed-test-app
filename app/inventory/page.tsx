'use client'
import styles from './page.module.scss'
import { forwardRef, useEffect, useState } from 'react'
import PageTransition from '../components/transition/PageTransition'
import { ErrorMessage, Field, Form, Formik } from 'formik'

function Inventory({ }, ref) {
  const [items, setItems] = useState({})
  const [newItem, setNewItem] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/inventory')
      .then((res) => res.json())
      .then((data) => {
        setItems(data.inventory)
        setLoading(false)
      })
  }, [])

  async function addItem() {
    fetch('/api/inventory',
      {
        method: 'POST',
        body: JSON.stringify({ newItem: { category: newItem, name: "?", amount: 0 } })
      }
    ).then((res) => res.json())
      .then((data) => {
        //setLoading(false)
        setItems(data.inventory)
      })
  }

  function onSubmit(values: { category: string; name: string; amount: number }) {
    fetch('/api/inventory',
      {
        method: 'POST',
        body: JSON.stringify({ newItem: { category: values.category, name: values.name, amount: values.amount } })
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
        {
          isLoading && <div>Loading...</div>
        }
        {
          !isLoading && <InventoryList items={items}/>
        }
        <ItemForm onSubmit={onSubmit} />
      </main>
    </PageTransition>

  )
}

function InventoryList({items}){
  return (
    <div className={styles.list}>
          {Object.keys(items).map(item =>
            <div className={styles.item}>{item} ({items[item].name}): {items[item].amount}</div>
          )}
    </div>
  )
}

type ItemFormProps = {
  onSubmit: (values: {
    category: string;
    name: string;
    amount: number;
  }) => void
}

function ItemForm({ onSubmit }: ItemFormProps) {
  return (
    <Formik
      initialValues={{ category: "", name: "", amount: 1 }}
      onSubmit={async (values, actions) => { onSubmit(values); actions.resetForm() }}
      validate={values => {
        const errors = {};
        if (!values.category) errors.category = 'Required';
        if (!values.name) errors.name = 'Required';
        return errors;
      }
      }
    >
      <Form className={styles.form}>
        <label>Category</label>
        <Field name="category" type="text" />
        <ErrorMessage className={styles.error} name="category" component="div" />
        <br />
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage className={styles.error} name="name" component="div" />
        <br />
        <label>Amount</label>
        <Field name="amount" type="number" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}


export default forwardRef(Inventory)