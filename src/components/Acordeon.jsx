import { useState } from 'react'

function Acordeon({ titulo, children }) {
  const [expandido, setExpandido] = useState(false)

  return (
    <div style={{ border: '1px solid #e6e6e6', borderRadius: 6, marginBottom: 8 }}>
      <button
        type="button"
        onClick={() => setExpandido((s) => !s)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '10px 12px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{titulo}</span>
        <span aria-hidden>{expandido ? '▼' : '▶'}</span>
      </button>
      {expandido && <div style={{ padding: '10px 12px', borderTop: '1px solid #eee' }}>{children}</div>}
    </div>
  )
}

export default Acordeon
