import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'
import FormularioNota from '../components/FormularioNota'

export default function NuevaNota() {
  const { agregarNota } = useNotas()
  const navigate = useNavigate()

  const handleGuardar = (datos) => {
    const nueva = {
      id: Date.now().toString(),
      ...datos,
      fechaCreacion: new Date().toISOString(),
    }

    agregarNota(nueva)
    navigate('/notas')
  }

  return (
    <section>
      <h2>Nueva nota</h2>

      <FormularioNota initialValues={{}} submitText="Crear nota" onSubmit={handleGuardar} />

      <div style={{ marginTop: 12 }}>
        <Link to="/notas">
          <button style={{ padding: '6px 10px' }}>Cancelar</button>
        </Link>
      </div>
    </section>
  )
}
