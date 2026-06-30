import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

function formatoFecha(iso) {
  try {
    return new Date(iso).toLocaleString()
  } catch (e) {
    return iso
  }
}

export default function DetalleNota() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { estado, eliminarNota } = useNotas()

  const nota = estado.notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <section>
        <h2>Nota no encontrada</h2>
        <p>La nota solicitada no existe.</p>
        <p>
          <Link to="/notas">Volver a notas</Link>
        </p>
      </section>
    )
  }

  const handleEliminar = () => {
    if (window.confirm('¿Eliminar esta nota? Esta acción no se puede deshacer.')) {
      eliminarNota(nota.id)
      navigate('/notas')
    }
  }

  return (
    <section>
      <h2>{nota.titulo}</h2>

      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <strong>Categoría:</strong> {nota.categoria}
        {nota.fijada && <span style={{ marginLeft: 8 }}>📌 Fijada</span>}
      </div>

      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 12 }}>{formatoFecha(nota.fechaCreacion)}</div>

      <div style={{ whiteSpace: 'pre-wrap', marginBottom: 18 }}>{nota.contenido}</div>

      <div style={{ display: 'flex', gap: 8 }}>
        <Link to="/notas">
          <button style={{ padding: '6px 10px' }}>Volver a notas</button>
        </Link>

        <Link to={`/notas/${nota.id}/editar`}>
          <button style={{ padding: '6px 10px' }}>Editar</button>
        </Link>

        <button onClick={handleEliminar} style={{ padding: '6px 10px' }}>
          Eliminar
        </button>
      </div>
    </section>
  )
}
