import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const habitos = [
    { id: 1, nombre: "Leer 20 páginas", hechoHoy: true, racha: 12, icono: "📖" },
    { id: 2, nombre: "Hacer ejercicio 30 min", hechoHoy: false, racha: 5, icono: "🏋️" },
    { id: 3, nombre: "Meditar 10 minutos", hechoHoy: true, racha: 8, icono: "🧘" },
    { id: 4, nombre: "Beber 2 litros de agua", hechoHoy: false, racha: 3, icono: "💧" }
  ]

  return (
    <div className="app">
      <Encabezado 
        titulo="Mis Hábitos" 
        subtitulo="Construye tu mejor versión un día a la vez" 
      />

      <button 
        className="boton-toggle"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        {mostrarFormulario ? 'Ocultar formulario' : '➕ Agregar nuevo hábito'}
      </button>

      {mostrarFormulario && <Formulario />}

      <Lista habitos={habitos} />
      <PiePagina />
    </div>
  )
}

export default App