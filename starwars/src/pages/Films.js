import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';

import imgCarregando from "../assets/img/carregando-gif.gif";

import '../assets/css/Films.css'

export default function Films() {
    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/films/").then((retorno) => {
            console.log(retorno);//Retorno API
            setDados(retorno);
            document.querySelector("#imgCarregamento").classList.add("invisivel");


        }).catch((erro) => {

            console.log(erro)
        });
    }, []);

    return (
        <div>
            <Cabecalho />
            <main>
                <h2>Filmes</h2>
                <div className='div-informacoes div-films'>
                    <img src={imgCarregando} alt="carregando" id='imgCarregamento' />

                    {
                        dados.map((item, key) => {
                            return (
                                <div key={key} className='div-info informacoes'>
                                    <p>Titulo: {item.title}</p>
                                    <p>Diretor: {item.producer}</p>
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