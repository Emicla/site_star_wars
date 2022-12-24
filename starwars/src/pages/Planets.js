import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';


export default function Planets(){

    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/planets/").then((retorno) => {
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
                                    <p>Clima: {item.climate}</p>
                                    <p>Diâmetro: {item.diameter}</p>
                                    <p>Terreno: {item.terrain}</p>
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