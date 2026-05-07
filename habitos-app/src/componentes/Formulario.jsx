import './Formulario.css'

function Formulario() {
  return (
    <section className="formulario">
      <h2>✨ Agregar Nuevo Hábito</h2>
      
      <div className="formulario-inputs">
        <input 
          type="text" 
          placeholder="¿Qué hábito quieres construir?" 
          className="input-habito"
        />
        
        <button className="btn-agregar">
          Agregar Hábito
        </button>
      </div>
      
      <p className="formulario-nota">
        (El formulario será funcional en el Sprint 3)
      </p>
    </section>
  )
}

export default Formulario