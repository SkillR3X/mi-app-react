import React from 'react'
import { Link } from 'react-router-dom'

export default function NoEncontrada() {
  return (
    <section>
      <h2>404 — Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>
        <Link to="/">Volver al inicio</Link>
      </p>
    </section>
  )
}
