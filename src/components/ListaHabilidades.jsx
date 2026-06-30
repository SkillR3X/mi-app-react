function ListaHabilidades() {
  const habilidades = [
    'React',
    'JavaScript',
    'CSS',
    'Node.js',
    'Git',
    'TypeScript',
  ]

  return (
    <section>
      <h2>Habilidades técnicas</h2>
      <p>Total de habilidades: {habilidades.length}</p>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  )
}

export default ListaHabilidades
