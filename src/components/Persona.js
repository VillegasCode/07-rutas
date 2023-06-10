import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

const {nombre, apellido} = useParams();

  return (
    <div>
        <h1>Página de PERSONA: {nombre} {apellido}</h1>
        <p>Esta página es de Persona</p>
    </div>
  )
}
