import { useState, useEffect } from 'react'

function VisorDocumento() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    const prev = document.title
    document.title = `Contador: ${contador} - Mi App`
    return () => {
      document.title = 'Mi App'
    }
  }, [contador])

  return (
    <section>
      <h2>Visor de documento</h2>
      <p>Valor: {contador}</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={() => setContador((c) => c - 1)}>-</button>
        <button type="button" onClick={() => setContador((c) => c + 1)}>+</button>
      </div>
    </section>
  )
}

export default VisorDocumento
