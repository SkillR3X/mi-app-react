import React from 'react'
import { useNotas } from '../context/NotasContext'

export default function Inicio() {
  const { estado } = useNotas()
  const notas = estado.notas
  const total = notas.length
  const fijadas = notas.filter((n) => n.fijada).length

  const porCategoria = notas.reduce((acc, nota) => {
    acc[nota.categoria] = (acc[nota.categoria] || 0) + 1
    return acc
  }, {})

  return (
    <section>
      <h2>Bienvenido a MisNotas</h2>
      <p>Administra tus notas de forma sencilla.</p>

      <div style={{ marginTop: 12 }}>
        <strong>Total de notas:</strong> {total}
      </div>
      <div>
        <strong>Notas fijadas:</strong> {fijadas}
      </div>

      <div style={{ marginTop: 12 }}>
        <strong>Cantidad por categoría:</strong>
        <ul>
          {Object.entries(porCategoria).map(([cat, cnt]) => (
            <li key={cat}>
              {cat}: {cnt}
            </li>
          ))}
          {Object.keys(porCategoria).length === 0 && <li>No hay notas aún</li>}
        </ul>
      </div>
    </section>
  )
}
