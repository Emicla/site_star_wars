
import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';


export default function Species() {

    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/species/").then((retorno) => {
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
                <h2>Especíes</h2>
                {
                    dados.map((item, key) => {
                        return (
                            <>
                                <div key={key}>
                                    <p>Nome: {item.name}</p>
                                    <p>Classificação da Especíe: {item.classification}</p>
                                    <p>Designação: {item.designation}</p>
                                    <br />
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