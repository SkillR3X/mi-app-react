function Dashboard() {
  const usuario = {
    nombre: 'Luis O',
    email: 'luis.o@example.com',
    rol: 'admin',
  }

  const notificaciones = [
    { id: 1, mensaje: 'Nueva solicitud de acceso', leida: false },
    { id: 2, mensaje: 'Backup completado', leida: true },
    { id: 3, mensaje: 'Nuevo comentario en tu post', leida: false },
    { id: 4, mensaje: 'Actualización disponible', leida: true },
  ]

  const actividadReciente = [
    { id: 1, accion: 'Inició sesión', fecha: '2026-06-30 09:12' },
    { id: 2, accion: 'Editó perfil', fecha: '2026-06-29 16:45' },
    { id: 3, accion: 'Publicó un artículo', fecha: '2026-06-28 11:03' },
  ]

  const noLeidas = notificaciones.filter((n) => !n.leida).length

  return (
    <>
      <section>
        <h2>Información del usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Email: {usuario.email}</p>
        <p>Rol: {usuario.rol}</p>
      </section>

      <section>
        <h2>Notificaciones pendientes: {noLeidas}</h2>
        {noLeidas === 0 ? (
          <p>No tienes notificaciones pendientes</p>
        ) : (
          <ul>
            {notificaciones.map((n) => (
              <li
                key={n.id}
                style={n.leida ? { opacity: 0.6 } : { fontWeight: 'bold' }}
              >
                {n.mensaje}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Actividad reciente</h2>
        {actividadReciente.length === 0 ? (
          <p>No hay actividad reciente</p>
        ) : (
          <ul>
            {actividadReciente.map((a) => (
              <li key={a.id}>
                <span>{a.accion}</span>
                <span style={{ marginLeft: 8, color: '#666' }}>{a.fecha}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Dashboard
