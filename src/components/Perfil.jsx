function Perfil() {
  const nombre = 'Luis O'
  const profesion = 'Desarrollador Frontend'
  const experiencia = 4
  const disponible = true

  return (
    <section>
      <h2>{nombre}</h2>
      <p>{profesion}</p>
      <p>{experiencia} años de experiencia</p>
      <p>{disponible ? 'Disponible para contratar' : 'No disponible'}</p>
    </section>
  )
}

export default Perfil