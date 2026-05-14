import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const [habitos, setHabitos] = useState([
    { id: 1, nombre: "Leer 20 páginas", hechoHoy: true, racha: 12, icono: "📖" },
    { id: 2, nombre: "Hacer ejercicio 30 min", hechoHoy: false, racha: 5, icono: "🏋️" },
    { id: 3, nombre: "Meditar 10 minutos", hechoHoy: true, racha: 8, icono: "🧘" },
  ])

  // CREATE
  const agregarHabito = (nombreNuevo) => {
    const habitoNuevo = {
      id: Date.now(),
      nombre: nombreNuevo,
      hechoHoy: false,
      racha: 0,
      icono: "⭐"
    }
    setHabitos([...habitos, habitoNuevo])
  }

  // DELETE
  const eliminarHabito = (idAEliminar) => {
    setHabitos(habitos.filter(habito => habito.id !== idAEliminar))
  }

  // UPDATE
  const alternarHechoHoy = (idAAlternar) => {
    setHabitos(habitos.map(habito => 
      habito.id === idAAlternar 
        ? { ...habito, hechoHoy: !habito.hechoHoy } 
        : habito
    ))
  }

  return (
    <div className="app">
      <Encabezado 
        titulo="Mis Hábitos" 
        subtitulo="Construye tu mejor versión un día a la vez" 
      />

      <button 
        className="boton-toggle"
        onClick={() => {/* toggle si quieres mantenerlo */}}
      >
        ➕ Agregar nuevo hábito
      </button>

      <Formulario alAgregar={agregarHabito} />
      <Lista 
        habitos={habitos} 
        alEliminar={eliminarHabito}
        alAlternar={alternarHechoHoy}
      />
      <PiePagina />
    </div>
  )
}

export default App