import React from 'react'
import { useParams } from 'react-router-dom'

export const Persona = () => {

let {nombre, apellido} = useParams();

// // Valores por defecto en parámetros opcionales
// if (!nombre) {
//     nombre="Invitado";
// }

// if (!apellido) {
//     apellido = "";
// }

  return (
    <div>

{/* Condicionales ternarios */}
{!nombre && <h1>No hay ninguna persona que mostrar</h1>}
{nombre && <h1>Página de persona: {nombre} {apellido}</h1>}

        <p>Esta página es de Persona</p>
    </div>
  )
}
