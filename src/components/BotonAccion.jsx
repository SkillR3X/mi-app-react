function BotonAccion({ texto, variante = 'primario', disabled = false, onClick }) {
  const variantes = {
    primario: { background: '#2563eb', color: '#fff' },
    secundario: { background: '#e5e7eb', color: '#111' },
    peligro: { background: '#ef4444', color: '#fff' },
  }

  const baseStyle = {
    padding: '8px 12px',
    borderRadius: 6,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  }

  const style = { ...baseStyle, ...(variantes[variante] || variantes.primario) }

  return (
    <button type="button" onClick={onClick} disabled={disabled} style={style}>
      {texto}
    </button>
  )
}

export default BotonAccion
