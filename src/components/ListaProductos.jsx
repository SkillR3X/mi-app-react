function ListaProductos() {
  const productos = [
    { id: 1, nombre: 'Auriculares', precio: 29.99, disponible: true },
    { id: 2, nombre: 'Teclado mecánico', precio: 79.5, disponible: false },
    { id: 3, nombre: 'Monitor 24"', precio: 149.0, disponible: true },
    { id: 4, nombre: 'Mouse inalámbrico', precio: 25.25, disponible: true },
    { id: 5, nombre: 'SSD 1TB', precio: 119.99, disponible: false },
  ]

  return (
    <section>
      <h2>Lista de productos</h2>
      <p>Total de productos: {productos.length}</p>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{`$${producto.precio.toFixed(2)}`}</td>
              <td style={{ color: producto.disponible ? 'green' : 'red' }}>
                {producto.disponible ? 'Disponible' : 'Agotado'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default ListaProductos
