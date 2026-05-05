import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const habitos = [
    { id: 1, nombre: "Leer 20 páginas", hechoHoy: true, racha: 12 },
    { id: 2, nombre: "Hacer ejercicio 30 min", hechoHoy: false, racha: 5 },
    { id: 3, nombre: "Meditar 10 minutos", hechoHoy: true, racha: 8 },
  ]

  return (
    <div className="app">
      <Encabezado 
        titulo="Mis Hábitos" 
        subtitulo="Construye tu mejor versión un día a la vez" 
      />
      <Formulario />
      <Lista habitos={habitos} />
      <PiePagina />
    </div>
  )
}

export default App