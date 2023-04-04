import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Pagina from '../components/Pagina'
import Rodape from '../components/Rodape'

const pagina2 = () => {

  return (
    <>
      <Pagina titulo="Página 2">
        <Container>
          <h1 className="">Pagina 2</h1>  
        </Container>
      </Pagina>
    </>
  )
}

export default pagina2