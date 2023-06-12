import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos'>Crear artículos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuarios'>Gestión Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Quiero cargar aquí los componentes de las subrutas */}
            <Outlet />
        </div>
    </div>
  )
}
