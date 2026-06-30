import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import ListaProductos from './components/ListaProductos'
import ListaTareas from './components/ListaTareas'
import Tarjeta from './components/Tarjeta'
import Dashboard from './components/Dashboard'
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
      <ListaTareas />
      <Tarjeta />
      <Dashboard />
    </main>
  )
}

export default App
