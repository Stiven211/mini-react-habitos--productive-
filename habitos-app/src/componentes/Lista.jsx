import Item from './Item'

function Lista({ habitos }) {
  return (
    <section className="lista">
      <h2>Mis Hábitos ({habitos.length})</h2>
      {habitos.map(habito => (
        <Item key={habito.id} habito={habito} />
      ))}
    </section>
  )
}

export default Lista