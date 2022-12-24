import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';
import '../assets/css/People.css'

export default function People() {

    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/people/").then((retorno) => {
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
                <h2>People</h2>
                <div className='div-informacoes'>
                    {
                        dados.map((item, key) => {
                            return (
                                <div key={key} className='informacoes'>
                                    <p>Nome: {item.name}</p>
                                    <p>Dia do nascimento: {item.birth_year}</p>
                                    <p>Genero: {item.gender}</p>
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