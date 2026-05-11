import './Encabezado.css'

function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </header>
  )
}

export default Encabezado