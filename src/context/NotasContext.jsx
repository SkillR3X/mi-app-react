import { createContext, useContext, useReducer } from 'react'

const NotasContext = createContext(null)

const crearNota = (titulo, contenido, categoria, fijada) => ({
  id: Date.now().toString(),
  titulo,
  contenido,
  categoria,
  fijada,
  fechaCreacion: new Date().toISOString(),
})

const estadoInicial = {
  notas: [
    crearNota('Comprar materiales', 'Comprar cuadernos y lápices para el curso.', 'personal', true),
    crearNota('Reunión de equipo', 'Preparar la presentación semanal del proyecto.', 'trabajo', true),
    crearNota('Repasar React', 'Estudiar hooks y patrones de componentes.', 'estudio', false),
    crearNota('Ideas para app', 'Pensar en una app de hábitos con recordatorios.', 'ideas', false),
    crearNota('Lectura pendiente', 'Terminar el capítulo sobre contexto en React.', 'estudio', false),
  ],
  filtroCategoria: 'todas',
  busqueda: '',
}

function reducer(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_NOTA':
      return {
        ...estado,
        notas: [accion.payload, ...estado.notas],
      }
    case 'ELIMINAR_NOTA':
      return {
        ...estado,
        notas: estado.notas.filter((nota) => nota.id !== accion.payload),
      }
    case 'EDITAR_NOTA':
      return {
        ...estado,
        notas: estado.notas.map((nota) =>
          nota.id === accion.payload.id ? { ...nota, ...accion.payload.datos } : nota,
        ),
      }
    case 'TOGGLE_FIJADA':
      return {
        ...estado,
        notas: estado.notas.map((nota) =>
          nota.id === accion.payload ? { ...nota, fijada: !nota.fijada } : nota,
        ),
      }
    case 'CAMBIAR_FILTRO':
      return {
        ...estado,
        filtroCategoria: accion.payload,
      }
    case 'CAMBIAR_BUSQUEDA':
      return {
        ...estado,
        busqueda: accion.payload,
      }
    default:
      return estado
  }
}

function NotasProvider({ children }) {
  const [estado, dispatch] = useReducer(reducer, estadoInicial)

  const agregarNota = (nota) => dispatch({ type: 'AGREGAR_NOTA', payload: nota })
  const eliminarNota = (id) => dispatch({ type: 'ELIMINAR_NOTA', payload: id })
  const editarNota = (id, datos) => dispatch({ type: 'EDITAR_NOTA', payload: { id, datos } })
  const toggleFijada = (id) => dispatch({ type: 'TOGGLE_FIJADA', payload: id })
  const cambiarFiltro = (filtro) => dispatch({ type: 'CAMBIAR_FILTRO', payload: filtro })
  const cambiarBusqueda = (busqueda) => dispatch({ type: 'CAMBIAR_BUSQUEDA', payload: busqueda })

  const value = {
    estado,
    agregarNota,
    eliminarNota,
    editarNota,
    toggleFijada,
    cambiarFiltro,
    cambiarBusqueda,
  }

  return <NotasContext.Provider value={value}>{children}</NotasContext.Provider>
}

function useNotas() {
  const contexto = useContext(NotasContext)

  if (!contexto) {
    throw new Error('useNotas debe usarse dentro de NotasProvider')
  }

  return contexto
}

export { NotasProvider, useNotas }
export default NotasContext
