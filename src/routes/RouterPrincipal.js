import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'

export const RouterPrincipal = () => {
  return (
    
    <BrowserRouter>

        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<Error />} />
            
            {/* En vez de usar una página de error también podrías colocar directamente el código HTML aquí <Route path='*' element={(
                <>
                    <h1>Error 404</h1>
                    <strong>Esta página no existe</strong>
                </>
            )} /> */}
        </Routes>

    </BrowserRouter>

  )
}
