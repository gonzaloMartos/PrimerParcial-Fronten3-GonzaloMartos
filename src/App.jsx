import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'
import styles from "./Modules/titulo.module.scss"

function App() {
  return (
    <>
    <div className={styles.div}>
      <h1>Carga e estudiantes</h1>
      <Form />
    </div>
    </>
  )
}

export default App
