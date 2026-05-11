import { useState } from 'react'
import './Item.css'

function Item({ habito }) {
  const [hechoHoy, setHechoHoy] = useState(habito.hechoHoy)
  const [resaltado, setResaltado] = useState(false)

  const toggleHechoHoy = (e) => {
    e.stopPropagation()
    setHechoHoy(!hechoHoy)
  }

  const toggleResaltado = () => {
    setResaltado(!resaltado)
  }

  return (
    <article 
      className={`item ${hechoHoy ? 'hecho-hoy' : ''} ${resaltado ? 'resaltado' : ''}`}
      onClick={toggleResaltado}
    >
      <div className="item-icono">{habito.icono}</div>
      
      <div className="item-contenido">
        <h3>{habito.nombre}</h3>
        <div className="racha">🔥 {habito.racha} días</div>
      </div>

      <div className="item-acciones">
        <button 
          className="btn-estado"
          onClick={toggleHechoHoy}
        >
          {hechoHoy ? '✓ Hecho' : 'Pendiente'}
        </button>
      </div>
    </article>
  )
}

export default Item