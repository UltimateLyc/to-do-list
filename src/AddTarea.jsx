import { useState } from 'react'

const AddTarea = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [fecha, setFecha] = useState('')
  const [terminada, setTerminada] = useState(false)

  const onSubmit = (e) => {
    // Evitamos que la paguina se recarge por el btn type submit
    e.preventDefault()
    if (!text) {
      alert('Por favor teclea la descripcion de la tarea')
    }

    onAdd({ text, fecha, terminada })

    // Limpiar los valores ingresado en los inputs
    setText('')
    setFecha('')
    setTerminada(false)
  }

  return (
    <form action='' className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Tarea</label>
        <input
          type='text'
          placeholder='Agregar una tarea'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Fecha</label>
        <input
          type='text'
          placeholder='Teclea la fecha'
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Termianda</label>
        <input
          type='checkbox'
          checked={terminada}
          value={terminada}
          onChange={(e) => setTerminada(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Guardar' className='btn btn-block' />
    </form>
  )
}

export default AddTarea
