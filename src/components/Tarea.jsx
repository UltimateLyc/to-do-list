import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete, onToggle }) => {
  return (
    <div className={`tarea ${tarea.terminada ? 'terminada' : ''}`} onDoubleClick={() => onToggle(tarea.id)}>
      <h3>
        {tarea.text}
        <FaTimes onClick={() => onDelete(tarea.id)} style={estiloTimes} />
      </h3>

      <p>{tarea.fecha}</p>
    </div>
  )
}

const estiloTimes = {
  cursor: 'pointer',
  color: 'red'
}

export default Tarea
