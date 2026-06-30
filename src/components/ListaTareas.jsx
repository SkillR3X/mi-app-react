function ListaTareas() {
  const tareas = [
    { id: 1, titulo: 'Configurar proyecto', completada: false, prioridad: 'alta' },
    { id: 2, titulo: 'Crear componentes', completada: false, prioridad: 'media' },
    { id: 3, titulo: 'Escribir tests', completada: true, prioridad: 'baja' },
    { id: 4, titulo: 'Documentar API', completada: false, prioridad: 'alta' },
    { id: 5, titulo: 'Revisar PRs', completada: true, prioridad: 'media' },
    { id: 6, titulo: 'Optimizar imagenes', completada: false, prioridad: 'baja' },
    { id: 7, titulo: 'Desplegar a staging', completada: true, prioridad: 'alta' },
  ]

  const pendientes = tareas.filter((t) => !t.completada)
  const completadas = tareas.filter((t) => t.completada)

  return (
    <section>
      <h2>Gestión de tareas</h2>

      <h3>Tareas pendientes ({pendientes.length})</h3>
      {pendientes.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {pendientes.map((t) => (
            <li key={t.id}>
              <span style={t.prioridad === 'alta' ? { color: 'red', fontWeight: 'bold' } : {}}>
                {t.titulo}
              </span>
              <span
                style={{
                  marginLeft: 8,
                  padding: '2px 6px',
                  borderRadius: 6,
                  background: '#f0f0f0',
                  fontSize: '0.85em',
                }}
              >
                {t.prioridad}
              </span>
            </li>
          ))}
        </ul>
      )}

      <h3>Tareas completadas ({completadas.length})</h3>
      {completadas.length === 0 ? (
        <p>No hay tareas completadas</p>
      ) : (
        <ul>
          {completadas.map((t) => (
            <li key={t.id} style={{ textDecoration: 'line-through' }}>
              {t.titulo}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTareas
