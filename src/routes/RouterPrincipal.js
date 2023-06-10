import React from 'react'
import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { Persona } from '../components/Persona'

export const RouterPrincipal = () => {
  return (
    
    <BrowserRouter>

    <h1>CABECERA</h1>
    <hr />

    <nav>
      <ul>
        <li>
          <NavLink to="/inicio"
                    className={({isActive}) => isActive ? "activado" : ""}
          >Inicio</NavLink>
        </li>
        <li>
          <NavLink to="articulos"
                    className={({isActive}) => isActive ? "activado" : ""}
          >Artículos</NavLink>
        </li>
        <li>
          <NavLink to="/contacto"
                    className={({isActive}) => isActive ? "activado" : ""}
          >Contacto</NavLink>
        </li>
      </ul>
    </nav>
    <hr />

    <section className='contenido-principal'>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/persona' element={<Persona />} />
            <Route path='*' element={<Error />} />
            
            {/* En vez de usar una página de error también podrías colocar directamente el código HTML aquí <Route path='*' element={(
                <>
                    <h1>Error 404</h1>
                    <strong>Esta página no existe</strong>
                </>
            )} /> */}
        </Routes>
    </section>

    </BrowserRouter>

  )
}
