import React from 'react'
import { Link } from 'react-router-dom'
import { useNotas } from '../context/NotasContext'

function formatoFecha(iso) {
  try {
    return new Date(iso).toLocaleString()
  } catch (e) {
    return iso
  }
}

export default function Notas() {
  const { estado, cambiarBusqueda, cambiarFiltro, toggleFijada } = useNotas()

  const total = estado.notas.length
  const busqueda = (estado.busqueda || '').trim().toLowerCase()
  const filtro = (estado.filtroCategoria || 'todas')

  const filtradas = estado.notas.filter((nota) => {
    // category filter
    if (filtro !== 'todas' && nota.categoria !== filtro) return false

    // search filter (title or content), case-insensitive
    if (!busqueda) return true
    const hayEnTitulo = nota.titulo.toLowerCase().includes(busqueda)
    const hayEnContenido = nota.contenido.toLowerCase().includes(busqueda)
    return hayEnTitulo || hayEnContenido
  })

  const fijadas = filtradas.filter((n) => n.fijada)
  const noFijadas = filtradas.filter((n) => !n.fijada)

  const visible = filtradas.length

  const categorias = [
    { value: 'todas', label: 'Todas' },
    { value: 'personal', label: 'Personal' },
    { value: 'trabajo', label: 'Trabajo' },
    { value: 'estudio', label: 'Estudio' },
    { value: 'ideas', label: 'Ideas' },
  ]

  return (
    <section>
      <h2>Notas</h2>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
        <input
          aria-label="Buscar notas"
          placeholder="Buscar por título o contenido..."
          value={estado.busqueda}
          onChange={(e) => cambiarBusqueda(e.target.value)}
          style={{ flex: 1, padding: '6px 8px' }}
        />

        <select
          aria-label="Filtrar por categoría"
          value={estado.filtroCategoria}
          onChange={(e) => cambiarFiltro(e.target.value)}
          style={{ padding: '6px 8px' }}
        >
          {categorias.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 12 }}>
        Mostrando {visible} de {total} notas
      </div>

      {visible === 0 ? (
        <div>No hay notas que coincidan con los filtros.</div>
      ) : (
        <div>
          {fijadas.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <h3 style={{ margin: '8px 0' }}>Fijadas</h3>
              <div style={{ display: 'grid', gap: 8 }}>
                {fijadas.map((nota) => (
                  <Link
                    key={nota.id}
                    to={`/notas/${nota.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article
                      style={{
                        border: '1px solid #e5e7eb',
                        padding: 12,
                        borderRadius: 6,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <strong>{nota.titulo}</strong>
                          <span style={{ background: '#eef2ff', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>{nota.categoria}</span>
                          <span title="Fijada">📌</span>
                        </div>
                        <div style={{ marginTop: 6, color: '#374151' }}>
                          {nota.contenido.length > 100 ? nota.contenido.slice(0, 100) + '...' : nota.contenido}
                        </div>
                        <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>{formatoFecha(nota.fechaCreacion)}</div>
                      </div>

                      <div>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleFijada(nota.id)
                          }}
                          aria-label="Toggle fijada"
                          style={{ padding: '6px 8px' }}
                        >
                          {nota.fijada ? 'Desfijar' : 'Fijar'}
                        </button>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {noFijadas.length > 0 && (
            <div>
              {fijadas.length > 0 && <hr style={{ margin: '12px 0' }} />}
              <div style={{ display: 'grid', gap: 8 }}>
                {noFijadas.map((nota) => (
                  <Link
                    key={nota.id}
                    to={`/notas/${nota.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article
                      style={{
                        border: '1px solid #e5e7eb',
                        padding: 12,
                        borderRadius: 6,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <strong>{nota.titulo}</strong>
                          <span style={{ background: '#f0fdf4', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>{nota.categoria}</span>
                          {nota.fijada && <span title="Fijada">📌</span>}
                        </div>
                        <div style={{ marginTop: 6, color: '#374151' }}>
                          {nota.contenido.length > 100 ? nota.contenido.slice(0, 100) + '...' : nota.contenido}
                        </div>
                        <div style={{ marginTop: 8, fontSize: 12, color: '#6b7280' }}>{formatoFecha(nota.fechaCreacion)}</div>
                      </div>

                      <div>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleFijada(nota.id)
                          }}
                          aria-label="Toggle fijada"
                          style={{ padding: '6px 8px' }}
                        >
                          {nota.fijada ? 'Desfijar' : 'Fijar'}
                        </button>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
