import { useLayoutEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { buscarApi } from '../services/BuscarDadosApi';


export default function People(){

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
                {
                    dados.map((item, key) => {
                        return (
                            <>
                                <div key={key}>
                                    <p>Nome: {item.name}</p>
                                    <p>Dia do nascimento: {item.birth_year}</p>
                                    <p>Genero: {item.gender}</p>
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