import './Item.css'

function Item({ habito }) {
  return (
    <article className={`item ${habito.hechoHoy ? 'hecho-hoy' : ''}`}>
      <div className="item-icono">{habito.icono || '⭐'}</div>
      
      <div className="item-contenido">
        <h3>{habito.nombre}</h3>
        <div className="racha">🔥 {habito.racha} días</div>
      </div>

      <div className="item-estado">
        {habito.hechoHoy ? 
          <span className="completado">✓ Hoy</span> : 
          <span className="pendiente">Pendiente</span>
        }
      </div>
    </article>
  )
}

export default Item