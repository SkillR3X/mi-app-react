import { useEffect, useState } from 'react'

function leerValorInicial(clave, valorInicial) {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return valorInicial
    }

    const valorGuardado = window.localStorage.getItem(clave)

    if (valorGuardado === null) {
      return valorInicial
    }

    return JSON.parse(valorGuardado)
  } catch {
    return valorInicial
  }
}

function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => leerValorInicial(clave, valorInicial))

  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return
      }

      const valorGuardado = window.localStorage.getItem(clave)
      const esValorInicial = JSON.stringify(valor) === JSON.stringify(valorInicial)

      if (valorGuardado === null && esValorInicial) {
        return
      }

      window.localStorage.setItem(clave, JSON.stringify(valor))
    } catch {
      // Silencioso por requerimiento
    }
  }, [clave, valor])

  return [valor, setValor]
}

export default useLocalStorage
