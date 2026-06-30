import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import './App.css'

function App() {
  return (
    <main>
      <Perfil />
      <Clima />
      <EstadoPedido />
      <MensajeBienvenida />
      <ListaHabilidades />
    </main>
  )
}

export default App
