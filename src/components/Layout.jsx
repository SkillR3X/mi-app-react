import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

export default function Layout() {
  const { estado } = useNotas()
  const total = estado.notas.length

  return (
    <div className="layout-container">
      <header style={{ padding: 16, borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ margin: 0 }}>MisNotas</h1>
        <nav style={{ marginTop: 8, display: 'flex', gap: 12 }}>
          <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400, textDecoration: isActive ? 'underline' : 'none' })}>
            Inicio
          </NavLink>
          <NavLink to="/notas" style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400, textDecoration: isActive ? 'underline' : 'none' })}>
            Notas
          </NavLink>
          <NavLink to="/notas/nueva" style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400, textDecoration: isActive ? 'underline' : 'none' })}>
            Nueva nota
          </NavLink>
        </nav>

        <div style={{ marginTop: 10, color: '#374151' }}>Total de notas: {total}</div>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>

      <footer style={{ padding: 12, borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280' }}>
        © 2026 MisNotas
      </footer>
    </div>
  )
}
