import { useLayoutEffect, useState } from 'react';
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

import '../assets/css/Menu.css';
import { buscarDuvidas } from '../services/BancoServices';

export default function Menu() {
    const [contadorHome, setContadorHome] = useState();
    const [duvidas, setDuvidas] = useState();

    /*const buscarApi = () => {
        axios.get("https://swapi.dev/")
            .then((dados) => console.log(dados))
            .catch((erro) => console.log("Algo deu errado: " + erro));
    }*/

    const contadorEntradas = () => {
        let contArmazenado = localStorage.getItem("contadorHome");

        if (contArmazenado == undefined) {
            localStorage.setItem("contadorHome", 1);
            setContadorHome(1);

        } else {
            setContadorHome((contArmazenado + 1));
        }
    }

    useLayoutEffect(() => {
        /*try {
            buscarDuvidas()
                .then((dados) => {
                    setDuvidas(dados);
                })
                .catch((e) => alert(e));

            // buscarApi();
            contadorEntradas();

        } catch (error) {
            console.log(error);
        }*/
    });

    return (
        <div className="div-menu">
            <Cabecalho />
            <main>
                <h2>Duvidas</h2>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Whats</th>
                        <th>Duvida</th>
                    </tr>
                    {
                        // duvidas.map((duvida, key) => {
                        //     return (
                        //         <tr>
                        //             <td key={key}>{duvida.nome}</td>
                        //             <td key={key}>{duvida.whats}</td>
                        //             <td key={key}>{duvida.duvida}</td>
                        //         </tr>
                        //     )
                        // })
                    }
                </table>

                <p className='numEntradas'>{contadorHome}</p>
            </main>
            <Rodape />
        </div>
    );
};