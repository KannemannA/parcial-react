import React from 'react'
import { useState } from 'react'

function Form(props) {
  const [data, setData] = useState({})
  const formData=(e)=>{
    e.preventDefault()
    data.nombre.trim()
    data.hobbie.trim()
    if(data.nombre.length<=2 || data.hobbie.length<=5){
      return props.onError('“Por favor chequea que la información sea correcta”.')
    }
    props.onData(data)
  }
  const handleInputValues=(e)=>{
    setData({
      ...data,
      [e.target.id]: e.target.value
    })
  }
  return (
    <form onSubmit={formData}>
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" id="nombre" required onBlur={handleInputValues}/>
      <label htmlFor="edad">Hobbie preferido:</label>
      <input type="text" id="hobbie" required onBlur={handleInputValues}/>
      <button type="submit">enviar</button>
    </form>
  )
}

export default Form