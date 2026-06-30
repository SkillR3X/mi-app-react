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
      <div className="app-container">
        <header>
          <h1>Ejercicios de componentes</h1>
        </header>

        <section className="exercise-section">
          <h2 className="exercise-title">Perfil</h2>
          <Perfil />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Clima</h2>
          <Clima />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Estado del pedido</h2>
          <EstadoPedido />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Mensaje de bienvenida</h2>
          <MensajeBienvenida />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Lista de habilidades</h2>
          <ListaHabilidades />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Lista de productos</h2>
          <ListaProductos />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Lista de tareas</h2>
          <ListaTareas />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Tarjeta</h2>
          <Tarjeta />
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Dashboard</h2>
          <Dashboard />
        </section>
      </div>
    </main>
  )
}

export default App
