function EstadoPedido() {
  const estado = 'enviado'

  return (
    <section>
      <h2>Estado del pedido</h2>
      <p>
        {estado === 'pendiente'
          ? '⏳'
          : estado === 'enviado'
            ? '🚚'
            : estado === 'entregado'
              ? '✅'
              : '❌'}{' '}
        {estado === 'pendiente'
          ? 'Tu pedido está siendo procesado'
          : estado === 'enviado'
            ? 'Tu pedido está en camino'
            : estado === 'entregado'
              ? 'Tu pedido ha sido entregado'
              : 'Tu pedido fue cancelado'}
      </p>
      {estado === 'enviado' && (
        <p>Tiempo estimado de entrega: 2-3 días hábiles</p>
      )}
    </section>
  )
}

export default EstadoPedido