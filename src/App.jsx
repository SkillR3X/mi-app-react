import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import ListaProductos from './components/ListaProductos'
import './App.css'

function App() {
  return (
    <main>
      <Perfil />
      <Clima />
      <EstadoPedido />
      <MensajeBienvenida />
      <ListaHabilidades />
      <ListaProductos />
    </main>
  )
}

export default App
