import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import { useNotificaciones } from '../context/NotificacionContext'

export default function Layout() {
  const { estado } = useNotas()
  const total = estado.notas.length
  const { notificacion } = useNotificaciones()

  return (
    <div className="layout-container">
      {notificacion && (
        <div className={`toast toast-${notificacion.tipo || 'info'}`}>
          {notificacion.mensaje}
        </div>
      )}

      <header className="site-header">
        <div className="header-inner">
          <h1>MisNotas</h1>
          <nav className="main-nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
            <NavLink to="/notas" className={({ isActive }) => (isActive ? 'active' : '')}>
              Notas
            </NavLink>
            <NavLink to="/notas/nueva" className={({ isActive }) => (isActive ? 'active' : '')}>
              Nueva nota
            </NavLink>
          </nav>
        </div>

        <div className="header-meta">Total de notas: {total}</div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">© 2026 MisNotas</footer>
    </div>
  )
}
