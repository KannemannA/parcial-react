import React from 'react'

function Card(props) {
  return (
    <div>
        <h3>tu nombre es:</h3>
        <h4>{props.onData.nombre}</h4>
        <h3>tu hobbie preferido es:</h3>
        <h4>{props.onData.hobbie}</h4>
    </div>
  )
}

export default Card