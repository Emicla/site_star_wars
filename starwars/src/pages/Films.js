import { useLayoutEffect } from 'react';
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import axios from 'axios';

export default function Films(){
    
    const buscarApi = () => {
        axios.get("https://swapi.dev/api/films/")
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