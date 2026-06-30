import { useState } from 'react'
import BotonAccion from './BotonAccion'
import Alerta from './Alerta'

function Contador() {
  const [valor, setValor] = useState(0)

  return (
    <section>
      <h2>Contador</h2>
      <p>Valor actual: {valor}</p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
        <BotonAccion
          texto="Decrementar"
          variante="secundario"
          disabled={valor === 0}
          onClick={() => setValor((v) => v - 1)}
        />

        <BotonAccion texto="Incrementar" variante="primario" onClick={() => setValor((v) => v + 1)} />

        <BotonAccion texto="Incrementar +5" variante="primario" onClick={() => setValor((v) => v + 5)} />

        <BotonAccion texto="Reiniciar" variante="peligro" onClick={() => setValor(() => 0)} />
      </div>

      {valor === 0 && <Alerta tipo="info" titulo="Información">El contador está en cero</Alerta>}
      {valor > 10 && <Alerta tipo="advertencia" titulo="Advertencia">¡Valor alto!</Alerta>}
    </section>
  )
}

export default Contador
