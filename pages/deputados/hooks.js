import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Pagina from "../../components/Pagina";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import apiDeputados from "../../services/apiDeputados";

const hooks = () => {
    const [deputados, setDeputados] = useState([]);

    useEffect(() => {
        apiDeputados.get('/deputados').then(resultado => {
            setDeputados(resultado.data.dados);
        })
    }, [])

    return (
        <Pagina titulo="Deputados">
            <h1></h1>
            <div>Hooks</div>

            {deputados.map((item) => (
                <p>{item.nome}</p>
            ))}
        </Pagina>
    );
};

//"quando você terminar de processar as promessas, crie a variavel resultado e deixe dentor da função"
//Gatilho, se tiver vazio vai ser executado toda vez que executar o projeto/ );

export default hooks;