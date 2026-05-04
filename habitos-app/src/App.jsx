import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const habitoEjemplo = {
    id: 1,
    nombre: "Leer 20 páginas",
    hechoHoy: true,
    racha: 12
  }

  return (
    <div className="app">
      <Encabezado 
        titulo="Mis Hábitos" 
        subtitulo="Construye tu mejor versión un día a la vez" 
      />
      <Formulario />
      <Lista />
      <Item habito={habitoEjemplo} />
      <PiePagina />
    </div>
  )
}

export default App