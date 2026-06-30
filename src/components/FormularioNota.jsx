import React, { useState, useEffect } from 'react'

export default function FormularioNota({ initialValues = {}, submitText = 'Guardar', onSubmit }) {
  const [titulo, setTitulo] = useState(initialValues.titulo || '')
  const [contenido, setContenido] = useState(initialValues.contenido || '')
  const [categoria, setCategoria] = useState(initialValues.categoria || 'personal')
  const [fijada, setFijada] = useState(Boolean(initialValues.fijada))

  const [errores, setErrores] = useState({})

  useEffect(() => {
    setTitulo(initialValues.titulo || '')
    setContenido(initialValues.contenido || '')
    setCategoria(initialValues.categoria || 'personal')
    setFijada(Boolean(initialValues.fijada))
  }, [initialValues])

  useEffect(() => {
    const nuevos = {}
    if (!titulo || titulo.trim().length < 3) nuevos.titulo = 'El título debe tener al menos 3 caracteres.'
    if (!contenido || contenido.trim().length < 10) nuevos.contenido = 'El contenido debe tener al menos 10 caracteres.'
    setErrores(nuevos)
  }, [titulo, contenido])

  const handleSubmit = (e) => {
    e.preventDefault()
    // final validation
    if (Object.keys(errores).length > 0) return
    const datos = {
      titulo: titulo.trim(),
      contenido: contenido.trim(),
      categoria,
      fijada,
    }
    onSubmit(datos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 8 }}>
        <label>
          Título
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '6px 8px', marginTop: 4 }}
          />
        </label>
        {errores.titulo && <div style={{ color: 'crimson', marginTop: 4 }}>{errores.titulo}</div>}
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>
          Contenido
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={6}
            style={{ display: 'block', width: '100%', padding: '6px 8px', marginTop: 4 }}
          />
        </label>
        {errores.contenido && <div style={{ color: 'crimson', marginTop: 4 }}>{errores.contenido}</div>}
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>
          Categoría
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={{ display: 'block', padding: '6px 8px', marginTop: 4 }}>
            <option value="personal">Personal</option>
            <option value="trabajo">Trabajo</option>
            <option value="estudio">Estudio</option>
            <option value="ideas">Ideas</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={fijada} onChange={(e) => setFijada(e.target.checked)} />
          Fijada
        </label>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit" disabled={Object.keys(errores).length > 0} style={{ padding: '6px 10px' }}>
          {submitText}
        </button>
      </div>
    </form>
  )
}
