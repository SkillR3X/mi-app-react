import React, { createContext, useContext } from 'react'
import useNotificacion from '../hooks/useNotificacion'

const NotificacionContext = createContext(null)

export function NotificacionProvider({ children }) {
  const { notificacion, mostrar, cerrar } = useNotificacion(3500)

  return (
    <NotificacionContext.Provider value={{ notificacion, mostrar, cerrar }}>
      {children}
    </NotificacionContext.Provider>
  )
}

export function useNotificaciones() {
  const ctx = useContext(NotificacionContext)
  if (!ctx) throw new Error('useNotificaciones debe usarse dentro de NotificacionProvider')
  return ctx
}

export default NotificacionContext
