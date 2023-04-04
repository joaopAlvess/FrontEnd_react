import React from 'react'
import Pagina from '../components/Pagina'

//Array
const carros = ["Opala", "Classic", "Ka", "Omega", "Fuscão"]

/*
// Objeto
const pessoa1 = {
  nome: "joao",
  idade: 20,
  telefone: "(61)99999-9999",
  endereco: "ABC"
}
*/
const array = () => {
  return (
    <>
    <Pagina titulo="Array">
      <ol>
        {carros.map(item=> (
          <p>{item}</p>
        ))}
      </ol>
          <h1>Array</h1>
    </Pagina>
    
    </>
  )
}

export default array