import './Item.css'

function Item({ habito }) {
  return (
    <article className="item">
      <h3>{habito.nombre}</h3>
      <p>Racha: {habito.racha} días</p>
      <p>Estado: {habito.hechoHoy ? 'Hecho hoy' : 'Pendiente'}</p>
    </article>
  )
}

export default Item