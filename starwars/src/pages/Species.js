
import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';
import '../assets/css/Species.css'

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
                <div className='div-species'>
                    {
                        dados.map((item, key) => {
                            return (
                                <div key={key} className='species'>
                                    <p>Nome: {item.name}</p>
                                    <p>Classificação da Especíe: {item.classification}</p>
                                    <p>Designação: {item.designation}</p>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </main>
            <Rodape />
        </div>
    )
}