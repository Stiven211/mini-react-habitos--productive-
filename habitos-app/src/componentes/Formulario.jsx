import { useState } from 'react'
import './Formulario.css'

function Formulario() {
  const [nuevoHabito, setNuevoHabito] = useState("")

  const manejarEnvio = (e) => {
    e.preventDefault()
    
    if (nuevoHabito.trim() === "") {
      alert("Por favor escribe el nombre del hábito")
      return
    }

    alert(`Hábito capturado: ${nuevoHabito}`)
    setNuevoHabito("") // Limpiar input
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>✨ Agregar Nuevo Hábito</h2>
      
      <div className="formulario-inputs">
        <input 
          type="text"
          value={nuevoHabito}
          onChange={(e) => setNuevoHabito(e.target.value)}
          placeholder="Ej: Caminar 10.000 pasos"
          className="input-habito"
        />
        
        <button type="submit" className="btn-agregar">
          Agregar
        </button>
      </div>
    </form>
  )
}

export default Formulario