function Tarjeta() {
  const datos = {
    titulo: 'Tarjeta de ejemplo',
    descripcion: 'Esta tarjeta muestra un ejemplo de título, descripción y etiquetas.',
    etiquetas: ['UI', 'React', 'Componente', 'Accesibilidad'],
    destacado: true,
  }

  const contStyle = {
    borderRadius: 8,
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    padding: 16,
    marginBottom: 12,
    background: datos.destacado ? '#fff8e1' : '#ffffff',
    border: datos.destacado ? '2px solid #ffd54f' : '1px solid #e6e6e6',
  }

  const tagStyle = {
    display: 'inline-block',
    background: '#f0f0f0',
    padding: '4px 8px',
    borderRadius: 9999,
    marginRight: 6,
    fontSize: '0.85em',
  }

  return (
    <div style={contStyle}>
      <h3 style={{ margin: '0 0 8px 0' }}>{datos.titulo}</h3>
      <p style={{ margin: '0 0 12px 0' }}>{datos.descripcion}</p>
      <div>
        {datos.etiquetas.map((et) => (
          <span key={et} style={tagStyle}>
            {et}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Tarjeta
