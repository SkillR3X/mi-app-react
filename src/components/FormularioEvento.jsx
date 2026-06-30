import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import BotonAccion from './BotonAccion'

function FormularioEvento() {
  const inicial = {
    titulo: '',
    fecha: '',
    categoria: '',
    descripcion: '',
    esPublico: false,
  }

  const [form, setForm] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    let t
    if (showConfirm) {
      t = setTimeout(() => setShowConfirm(false), 4000)
    }
    return () => clearTimeout(t)
  }, [showConfirm])

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setForm((prev) => ({ ...prev, [name]: val }))
  }

  const validar = () => {
    const err = {}
    if (!form.titulo || form.titulo.trim().length < 5) err.titulo = 'El título debe tener al menos 5 caracteres'
    if (!form.fecha) err.fecha = 'La fecha es obligatoria'
    else {
      const hoy = new Date()
      hoy.setHours(0, 0, 0, 0)
      const f = new Date(form.fecha)
      if (isNaN(f.getTime()) || f < hoy) err.fecha = 'La fecha no puede ser pasada'
    }
    if (!form.categoria) err.categoria = 'Selecciona una categoría'
    if (!form.descripcion || form.descripcion.trim().length < 20)
      err.descripcion = 'La descripción debe tener al menos 20 caracteres'

    setErrores(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return

    const nuevo = { id: Date.now(), ...form }
    setEventos((prev) => [nuevo, ...prev])

    setSuccessMsg(`Evento registrado: ${form.titulo} (${form.categoria}) el ${form.fecha}`)
    setShowConfirm(true)
    setForm(inicial)
    setErrores({})
  }

  const anyEmptyRequired = !form.titulo.trim() || !form.fecha || !form.categoria || !form.descripcion.trim()

  return (
    <section>
      <h2>Registrar evento</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Título</label>
          <input name="titulo" value={form.titulo} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
          {errores.titulo && <Alerta tipo="error" titulo="Error">{errores.titulo}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Fecha</label>
          <input name="fecha" type="date" value={form.fecha} onChange={handleChange} style={{ padding: 8 }} />
          {errores.fecha && <Alerta tipo="error" titulo="Error">{errores.fecha}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Categoría</label>
          <select name="categoria" value={form.categoria} onChange={handleChange} style={{ padding: 8 }}>
            <option value="">-- selecciona --</option>
            <option value="conferencia">conferencia</option>
            <option value="taller">taller</option>
            <option value="seminario">seminario</option>
            <option value="otro">otro</option>
          </select>
          {errores.categoria && <Alerta tipo="error" titulo="Error">{errores.categoria}</Alerta>}
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Descripción</label>
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} style={{ width: '100%', padding: 8 }} />
          {errores.descripcion && <Alerta tipo="error" titulo="Error">{errores.descripcion}</Alerta>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <input name="esPublico" type="checkbox" checked={form.esPublico} onChange={handleChange} /> Es público
          </label>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <BotonAccion texto="Registrar" variante="primario" disabled={anyEmptyRequired} onClick={handleSubmit} />
          <BotonAccion texto="Limpiar" variante="secundario" onClick={() => { setForm(inicial); setErrores({}) }} />
        </div>
      </form>

      {showConfirm && <Alerta tipo="exito" titulo="Éxito">{successMsg}</Alerta>}

      <hr style={{ margin: '16px 0' }} />

      <h3>Eventos registrados ({eventos.length})</h3>
      {eventos.length === 0 ? (
        <Alerta tipo="info" titulo="Información">No hay eventos registrados</Alerta>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {eventos.map((ev) => (
            <li key={ev.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
              <div style={{ fontWeight: 600 }}>{ev.titulo}</div>
              <div style={{ color: '#555' }}>{ev.fecha} — {ev.categoria} — {ev.esPublico ? 'Público' : 'Privado'}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default FormularioEvento
