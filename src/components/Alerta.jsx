function Alerta({ tipo = 'info', titulo, children }) {
  const tipos = {
    exito: { icon: '✅', bg: '#e6f4ea' },
    advertencia: { icon: '⚠️', bg: '#fff7e6' },
    error: { icon: '❌', bg: '#fdecea' },
    info: { icon: 'ℹ️', bg: '#e8f3ff' },
  }

  const { icon, bg } = tipos[tipo] || tipos.info

  const contStyle = {
    background: bg,
    padding: '10px 12px',
    borderRadius: 8,
    marginBottom: 8,
    border: '1px solid rgba(0,0,0,0.06)',
  }

  const headerStyle = { display: 'flex', alignItems: 'center', gap: 8 }

  return (
    <div style={contStyle} role="alert">
      <div style={headerStyle}>
        <span aria-hidden>{icon}</span>
        <strong>{titulo}</strong>
      </div>
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  )
}

export default Alerta
