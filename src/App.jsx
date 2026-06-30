import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotasProvider } from './context/NotasContext'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Notas from './pages/Notas'
import NuevaNota from './pages/NuevaNota'
import NoEncontrada from './pages/NoEncontrada'

function App() {
  return (
    <NotasProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="notas">
              <Route index element={<Notas />} />
              <Route path="nueva" element={<NuevaNota />} />
              <Route path=":id" element={<div>DetalleNota (pendiente)</div>} />
              <Route path=":id/editar" element={<div>EditarNota (pendiente)</div>} />
            </Route>
            <Route path="*" element={<NoEncontrada />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NotasProvider>
  )
}

export default App
