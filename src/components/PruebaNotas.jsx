import { useNotas } from '../context/NotasContext'

function PruebaNotas() {
  const { estado } = useNotas()

  return (
    <section>
      <h2>Prueba del contexto de notas</h2>
      <p>Total de notas registradas: {estado.notas.length}</p>
    </section>
  )
}

export default PruebaNotas
