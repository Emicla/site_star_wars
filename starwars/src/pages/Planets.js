import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';
import '../assets/css/Planets.css'

export default function Planets() {

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
                <h2>Planets</h2>
                <div className='div-planets'>
                    {
                        dados.map((item, key) => {
                            return (
                                <div key={key} className='planets'>
                                    <p>Nome: {item.name}</p>
                                    <p>Clima: {item.climate}</p>
                                    <p>Diâmetro: {item.diameter}</p>
                                    <p>Terreno: {item.terrain}</p>
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