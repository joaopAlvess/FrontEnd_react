import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

const Pagina2 = (props) => {

  
  return (
    <>
        <Cabecalho />
        <div className='bg-secondary bg-opacity-10 text-dark text-center py-5'>
            <h3>{props.titulo2}</h3>
        </div>
        <Container>
          {props.children}
        </Container>
        <Rodape />
    </>
  )
}

export default Pagina2