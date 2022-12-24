import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';
import '../assets/css/Startships.css'

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
                <h2>Starships</h2>
                <div className='div-startships'>
                    {
                        dados.map((item, key) => {
                            return (
                                <div key={key} className='startships'>
                                    <p>Nome: {item.name}</p>
                                    <p>Modelo: {item.model}</p>
                                    <p>Manufaturador{item.manufacturer}</p>
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