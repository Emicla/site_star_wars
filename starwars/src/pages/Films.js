import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';

export default function Films() {
    const [dados, setDados] = useState([]);

    useLayoutEffect(() => {
        buscarApi("https://swapi.dev/api/films/").then((retorno) => {
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
                <ul>
                    {
                        dados.map((item, key) => {
                            return (
                                <>
                                    <li key={key}>Titulo: {item.title}</li>
                                    <li>Diretor: {item.producer}</li>
                                    <br/>
                                </>
                            )
                        })
                    }
                </ul>
            </main>
            <Rodape />
        </div>
    )
}