import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import BotonAccion from './BotonAccion'

function TemporizadorPomodoro() {
  const DURACION_INICIAL = 1500 // 25 minutos en segundos

  const [tiempoRestante, setTiempoRestante] = useState(DURACION_INICIAL)
  const [activo, setActivo] = useState(false)
  const [finalizado, setFinalizado] = useState(false)

  useEffect(() => {
    let intervalId = null

    if (activo && tiempoRestante > 0) {
      intervalId = setInterval(() => {
        setTiempoRestante((prev) => {
          const nuevo = prev - 1
          if (nuevo <= 0) {
            setActivo(false)
            setFinalizado(true)
            return 0
          }
          return nuevo
        })
      }, 1000)
    }

    return () => {
      if (intervalId !== null) clearInterval(intervalId)
    }
  }, [activo, tiempoRestante])

  const formatearTiempo = (segundos) => {
    const mins = Math.floor(segundos / 60)
    const secs = segundos % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleIniciar = () => {
    if (tiempoRestante > 0) {
      setActivo(true)
    }
  }

  const handlePausar = () => {
    setActivo(false)
  }

  const handleReiniciar = () => {
    setActivo(false)
    setTiempoRestante(DURACION_INICIAL)
    setFinalizado(false)
  }

  return (
    <section>
      <h2>Temporizador Pomodoro</h2>

      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>
        {formatearTiempo(tiempoRestante)}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <BotonAccion
          texto="Iniciar"
          variante="primario"
          disabled={activo || tiempoRestante === 0}
          onClick={handleIniciar}
        />
        <BotonAccion
          texto="Pausar"
          variante="secundario"
          disabled={!activo}
          onClick={handlePausar}
        />
        <BotonAccion
          texto="Reiniciar"
          variante="peligro"
          onClick={handleReiniciar}
        />
      </div>

      {finalizado && (
        <Alerta tipo="exito" titulo="¡Tiempo completado!">
          El temporizador de Pomodoro ha terminado. ¡Buen trabajo!
        </Alerta>
      )}
    </section>
  )
}

export default TemporizadorPomodoro
