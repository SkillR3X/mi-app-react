function Modal({ titulo, abierto, children }) {
  if (!abierto) return null

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  }

  const modalStyle = {
    background: '#fff',
    borderRadius: 8,
    padding: 20,
    maxWidth: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  }

  return (
    <div style={overlayStyle} role="dialog" aria-modal="true">
      <div style={modalStyle}>
        <h3 style={{ marginTop: 0 }}>{titulo}</h3>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
