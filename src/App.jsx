import { useState } from 'react'
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
import BotonAccion from './components/BotonAccion'
import Modal from './components/Modal'
import Contador from './components/Contador'
import ListaContactos from './components/ListaContactos'
import FormularioEvento from './components/FormularioEvento'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main>
      <div className="app-container">
        <header>
          <h1>Ejercicios de componentes</h1>
        </header>

        <Acordeon titulo="Perfil" defaultExpanded>
          <Perfil />
        </Acordeon>

        <Acordeon titulo="Clima">
          <Clima />
        </Acordeon>

        <Acordeon titulo="Estado del pedido">
          <EstadoPedido />
        </Acordeon>

        <Acordeon titulo="Mensaje de bienvenida">
          <MensajeBienvenida />
        </Acordeon>

        <Acordeon titulo="Lista de habilidades">
          <ListaHabilidades />
        </Acordeon>

        <Acordeon titulo="Lista de productos">
          <ListaProductos />
        </Acordeon>

        <Acordeon titulo="Lista de tareas">
          <ListaTareas />
        </Acordeon>

        <Acordeon titulo="Tarjeta">
          <Tarjeta />
        </Acordeon>

        <Acordeon titulo="Dashboard">
          <Dashboard />
        </Acordeon>

        <Acordeon titulo="Alertas">
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
        </Acordeon>

        <Acordeon titulo="Acordeones (ejemplo)">
          <Acordeon titulo="Sección 1">
            <p>Contenido de la sección 1.</p>
          </Acordeon>
          <Acordeon titulo="Sección 2">
            <p>Contenido de la sección 2.</p>
          </Acordeon>
          <Acordeon titulo="Sección 3">
            <p>Contenido de la sección 3.</p>
          </Acordeon>
        </Acordeon>

        <Acordeon titulo="Modal">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <BotonAccion texto="Abrir modal" onClick={() => setModalOpen(true)} />
            <Modal titulo="Mi modal" abierto={modalOpen}>
              <p>Este es el contenido del modal.</p>
              <div style={{ marginTop: 12 }}>
                <BotonAccion texto="Cerrar" variante="secundario" onClick={() => setModalOpen(false)} />
              </div>
            </Modal>
          </div>
        </Acordeon>

        <Acordeon titulo="Contador">
          <Contador />
        </Acordeon>

        <Acordeon titulo="Lista de contactos">
          <ListaContactos />
        </Acordeon>

        <Acordeon titulo="Formulario de evento">
          <FormularioEvento />
        </Acordeon>
      </div>
    </main>
  )
}

export default App
