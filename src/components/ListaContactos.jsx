import { useState } from 'react'
import Modal from './Modal'
import Alerta from './Alerta'
import BotonAccion from './BotonAccion'

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Ana Perez', telefono: '555-1234', favorito: true },
    { id: 2, nombre: 'Luis Gómez', telefono: '555-5678', favorito: false },
    { id: 3, nombre: 'María López', telefono: '555-9012', favorito: false },
    { id: 4, nombre: 'Carlos Ruiz', telefono: '555-3456', favorito: true },
    { id: 5, nombre: 'Sofía Díaz', telefono: '555-7890', favorito: false },
  ])

  const [nuevoBusqueda, setNuevoBusqueda] = useState('')
  const [soloFavoritos, setSoloFavoritos] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)
  const [contactoPorEliminar, setContactoPorEliminar] = useState(null)

  const manejarToggleFavorito = (id) => {
    setContactos((prev) => prev.map((c) => (c.id === id ? { ...c, favorito: !c.favorito } : c)))
  }

  const solicitarEliminar = (contacto) => {
    setContactoPorEliminar(contacto)
    setModalOpen(true)
  }

  const confirmarEliminar = () => {
    if (!contactoPorEliminar) return
    const id = contactoPorEliminar.id
    setContactos((prev) => prev.filter((c) => c.id !== id))
    setContactoPorEliminar(null)
    setModalOpen(false)
  }

  const cancelarEliminar = () => {
    setContactoPorEliminar(null)
    setModalOpen(false)
  }

  const textoBusqueda = nuevoBusqueda.trim().toLowerCase()

  const filtrados = contactos.filter((c) => {
    if (soloFavoritos && !c.favorito) return false
    if (!textoBusqueda) return true
    return (
      c.nombre.toLowerCase().includes(textoBusqueda) ||
      c.telefono.toLowerCase().includes(textoBusqueda)
    )
  })

  const totalFavoritos = contactos.filter((c) => c.favorito).length

  return (
    <section>
      <h2>Contactos</h2>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <input
          type="search"
          placeholder="Buscar por nombre o teléfono"
          value={nuevoBusqueda}
          onChange={(e) => setNuevoBusqueda(e.target.value)}
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
        />
        <BotonAccion
          texto={soloFavoritos ? 'Mostrar todos' : 'Mostrar favoritos'}
          variante="secundario"
          onClick={() => setSoloFavoritos((s) => !s)}
        />
      </div>

      <p>
        Favoritos: {totalFavoritos} / {contactos.length} — Resultados: {filtrados.length}
      </p>

      {filtrados.length === 0 ? (
        <Alerta tipo="info" titulo="Información">No se encontraron contactos</Alerta>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filtrados.map((c) => (
            <li
              key={c.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{c.nombre}</div>
                <div style={{ color: '#666' }}>{c.telefono}</div>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => manejarToggleFavorito(c.id)}
                  aria-label={c.favorito ? 'Quitar favorito' : 'Marcar favorito'}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 18,
                  }}
                >
                  {c.favorito ? '★' : '☆'}
                </button>

                <BotonAccion texto="Eliminar" variante="peligro" onClick={() => solicitarEliminar(c)} />
              </div>
            </li>
          ))}
        </ul>
      )}

      <Modal titulo="Confirmar eliminación" abierto={modalOpen}>
        <p>
          ¿Estás seguro de eliminar a {contactoPorEliminar ? contactoPorEliminar.nombre : ''}?
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <BotonAccion texto="Cancelar" variante="secundario" onClick={cancelarEliminar} />
          <BotonAccion texto="Eliminar" variante="peligro" onClick={confirmarEliminar} />
        </div>
      </Modal>
    </section>
  )
}

export default ListaContactos
