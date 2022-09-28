import Button from './Button'

const Header = ({ titulo, onAdd, mostrarForm }) => {
  const onClick = () => {
    console.log('click')
  }

  /*   const saludo = () => {
    console.log('holi')
  } */

  return (

    <header className='header'>

      <h1>
        {titulo}  {/* Mandamos a llamar atravez de props el titulo */}
      </h1>
      <Button texto={mostrarForm ? 'Cerrar' : 'Agregar'} color={mostrarForm ? 'gray' : 'black'} onClick={onAdd} />
      {/* <Button texto='Boton 2' color='blue' onClick={saludo}/> */}

    </header>
  )
}

/* de este manera podemos crear un props por defaul */
Header.defaultProps = {
  titulo: 'Tareas'
}

// Forma dos de agregar estilos
/* const estiloEncabezado = {
  color: 'red',
  backgroundColor: 'black'
} */

export default Header
