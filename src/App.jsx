import { useState } from 'react'
import './App.css'
import Form from './componentes/Form'
import Card from './componentes/Card'

function App() {
  const [datos, setDatos] = useState("")
  const [errores, setErrores] = useState("")
  const handleError=(error) => {setErrores(error)
  setDatos("")}
  const handleData=(data) =>{setDatos(data)
  setErrores("")}
  return (
    <>
      <Form onError={handleError} onData={handleData}/>
      {datos? <Card onData={datos} />:undefined}
      {errores?<p style={{color: "red"}}>{errores}</p>:undefined}
    </>
  )
}

export default App
