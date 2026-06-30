import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotasProvider } from './context/NotasContext'
import { NotificacionProvider } from './context/NotificacionContext'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Notas from './pages/Notas'
import NuevaNota from './pages/NuevaNota'
import NoEncontrada from './pages/NoEncontrada'
import DetalleNota from './pages/DetalleNota'
import EditarNota from './pages/EditarNota'

function App() {
  return (
    <NotificacionProvider>
      <NotasProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Inicio />} />
              <Route path="notas">
                <Route index element={<Notas />} />
                <Route path="nueva" element={<NuevaNota />} />
                <Route path=":id" element={<DetalleNota />} />
                <Route path=":id/editar" element={<EditarNota />} />
              </Route>
              <Route path="*" element={<NoEncontrada />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NotasProvider>
    </NotificacionProvider>
  )
}

export default App
