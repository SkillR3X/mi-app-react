import Perfil from './components/Perfil'
import Clima from './components/Clima'
import EstadoPedido from './components/EstadoPedido'
import MensajeBienvenida from './components/MensajeBienvenida'
import ListaHabilidades from './components/ListaHabilidades'
import ListaProductos from './components/ListaProductos'
import ListaTareas from './components/ListaTareas'
import Tarjeta from './components/Tarjeta'
import Dashboard from './components/Dashboard'
import Alerta from './components/Alerta'
import Acordeon from './components/Acordeon'
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

        <section className="exercise-section">
          <h2 className="exercise-title">Alertas</h2>
          <Alerta tipo="exito" titulo="Éxito">
            Operación completada correctamente.
          </Alerta>
          <Alerta tipo="advertencia" titulo="Advertencia">
            Ten en cuenta los cambios recientes.
          </Alerta>
          <Alerta tipo="error" titulo="Error">
            Ocurrió un problema al procesar la solicitud.
          </Alerta>
          <Alerta titulo="Información">Este es un mensaje informativo.</Alerta>
        </section>

        <section className="exercise-section">
          <h2 className="exercise-title">Acordeones</h2>
          <Acordeon titulo="Sección 1">
            <p>Contenido de la sección 1.</p>
          </Acordeon>
          <Acordeon titulo="Sección 2">
            <p>Contenido de la sección 2.</p>
          </Acordeon>
          <Acordeon titulo="Sección 3">
            <p>Contenido de la sección 3.</p>
          </Acordeon>
        </section>
      </div>
    </main>
  )
}

export default App
