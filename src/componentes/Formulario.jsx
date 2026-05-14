import { useState } from 'react'
import './Formulario.css'

function Formulario() {
  const [nuevoHabito, setNuevoHabito] = useState("")

  const manejarEnvio = (evento) => {
    evento.preventDefault()                    // ← Muy importante

    if (nuevoHabito.trim() === "") {
      alert("Por favor escribe el nombre del hábito")
      return
    }

    alert(`Hábito capturado: ${nuevoHabito}`)
    setNuevoHabito("")   // Limpiar el campo
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Agregar nuevo hábito</h2>
      
      <input
        type="text"
        value={nuevoHabito}
        onChange={(e) => setNuevoHabito(e.target.value)}
        placeholder="Nombre del hábito..."
      />
      
      <button type="submit">Agregar hábito</button>
    </form>
  )
}

export default Formulario