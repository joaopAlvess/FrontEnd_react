import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

const Pagina = (props) => {

  
  return (
    <>
        <Cabecalho />
        <div className='bg-secondary text-light py-3 text-center mb-3'>
            <h1>{props.titulo}</h1>
        </div>
        <Container>
          {props.children}
        </Container>
        <Rodape />
    </>
  )
}

export default Pagina