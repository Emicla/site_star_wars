import { useLayoutEffect } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import axios from 'axios';

export default function Planets(){

    const buscarApi = () => {
        axios.get("https://swapi.dev/api/planets/")
            .then((dados) => console.log(dados))
            .catch((erro) => console.log("Algo deu errado: " + erro));
    }

    useLayoutEffect(()=>{
       buscarApi(); 
    },[]);

    return(
        <div>    
            <Cabecalho />
            <main>
                
            </main>
            <Rodape />
        </div>
    )
}