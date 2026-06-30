import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import FormularioNota from '../components/FormularioNota'

export default function EditarNota() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { estado, editarNota } = useNotas()

  const nota = estado.notas.find((n) => n.id === id)

  if (!nota) {
    return (
      <section>
        <h2>Nota no encontrada</h2>
        <p>La nota que intentas editar no existe.</p>
        <p>
          <Link to="/notas">Volver a notas</Link>
        </p>
      </section>
    )
  }

  const handleGuardar = (datos) => {
    editarNota(nota.id, datos)
    navigate(`/notas/${nota.id}`)
  }

  return (
    <section>
      <h2>Editar nota</h2>

      <FormularioNota initialValues={nota} submitText="Guardar cambios" onSubmit={handleGuardar} />

      <div style={{ marginTop: 12 }}>
        <Link to={`/notas/${nota.id}`}>
          <button style={{ padding: '6px 10px' }}>Cancelar</button>
        </Link>
      </div>
    </section>
  )
}
