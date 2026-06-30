import { useEffect, useState } from 'react'

function useNotificacion(duracion = 3000) {
  const [cola, setCola] = useState([])
  const notificacion = cola.length > 0 ? cola[0] : null

  const mostrar = (mensaje, tipo = 'info') => {
    const nuevaNotificacion = {
      id: Date.now() + Math.random(),
      mensaje,
      tipo,
    }

    setCola((prev) => [...prev, nuevaNotificacion])
  }

  const cerrar = () => {
    setCola((prev) => prev.slice(1))
  }

  useEffect(() => {
    if (!notificacion) {
      return undefined
    }

    const timeoutId = setTimeout(() => {
      setCola((prev) => prev.slice(1))
    }, duracion)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [notificacion, duracion])

  return { notificacion, mostrar, cerrar }
}

export default useNotificacion
