import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';

export default function Startships() {

    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/starships/").then((retorno) => {
            console.log(retorno);//Retorno API
            setDados(retorno);

        }).catch((erro) => {

            console.log(erro)
        });
    }, []);

    return (
        <div>
            <Cabecalho />
            <main>
                {
                    dados.map((item, key) => {
                        return (
                            <>
                                <div key={key}>
                                    <p>Nome: {item.name}</p>
                                    <p>Modelo: {item.model}</p>
                                    <p>Manufaturador{item.manufacturer}</p>
                                    <br/>
                                </div>
                            </>
                        )
                    })
                }
            </main>
            <Rodape />
        </div>
    )
}