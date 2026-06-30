import useLocalStorage from '../hooks/useLocalStorage'

const STORAGE_KEY = 'config-usuario'

const defaultConfig = {
  nombre: '',
  tema: 'claro',
  notificaciones: true,
}

function ConfiguracionUsuario() {
  const [configuracion, setConfiguracion] = useLocalStorage(STORAGE_KEY, defaultConfig)

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target

    setConfiguracion((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleReset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Silencioso por requerimiento
    }
    setConfiguracion(defaultConfig)
  }

  return (
    <section>
      <h2>Configuración de usuario</h2>

      <form>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={configuracion.nombre}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="tema">Tema</label>
          <select
            id="tema"
            name="tema"
            value={configuracion.tema}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          >
            <option value="claro">Claro</option>
            <option value="oscuro">Oscuro</option>
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="notificaciones" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <input
              id="notificaciones"
              name="notificaciones"
              type="checkbox"
              checked={configuracion.notificaciones}
              onChange={handleChange}
            />
            Notificaciones
          </label>
        </div>

        <button type="button" onClick={handleReset}>
          Restablecer valores
        </button>
      </form>

      <div style={{ marginTop: 16, padding: 12, border: '1px solid #e5e7eb', borderRadius: 8 }}>
        <h3 style={{ marginTop: 0 }}>Vista previa</h3>
        <p><strong>Nombre:</strong> {configuracion.nombre || '(vacío)'}</p>
        <p><strong>Tema:</strong> {configuracion.tema}</p>
        <p><strong>Notificaciones:</strong> {configuracion.notificaciones ? 'activadas' : 'desactivadas'}</p>
      </div>
    </section>
  )
}

export default ConfiguracionUsuario
