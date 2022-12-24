import { useLayoutEffect, useState } from 'react';
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

import '../assets/css/Menu.css';
import "../assets/css/Home.css"
import { buscarDuvidas, deleteDuvida } from '../services/BancoServices';

export default function Menu() {
    const [contadorHome, setContadorHome] = useState(1);
    const [duvidas, setDuvidas] = useState([]);

    let verificaContador = false;

    const contadorEntradas = () => {
        let contArmazenado = localStorage.getItem("contador");

        if (contArmazenado === null) {
            localStorage.setItem("contador", 1);
            setContadorHome(1);

        } else {
            setContadorHome((parseInt(contArmazenado) + 1));
            localStorage.setItem("contador", (parseInt(contArmazenado) + 1));
        }
    }

    const deletarDuvida = async (id) => {
        try {
            await deleteDuvida(id);
            alert("Dados excluidos");
            buscarDuvidas()
                .then((dados) => {
                    console.log(dados)
                    setDuvidas(dados);
                })
                .catch((e) => alert(e));

        } catch (error) {
            alert(error);
        }
    }

    useLayoutEffect(() => {
        try {
            buscarDuvidas()
                .then((dados) => {
                    setDuvidas(dados);
                })
                .catch((e) => alert(e));

        } catch (error) {
            console.log(error);
        }

        if(!verificaContador){
            contadorEntradas();
            verificaContador = true;
        }
    }, []);

    return (
        <div className="div-menu">
            <Cabecalho />
            <main>
                <p className='numEntradas'>{contadorHome}</p>

                <h2>Duvidas</h2>

                <table className='tabela-duvidas'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Whats</th>
                            <th>Duvida</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            duvidas.map((duvida, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{duvida.nome}</td>
                                        <td>{duvida.whats}</td>
                                        <td>{duvida.duvida}</td>
                                        <td className='btnDeletar' onClick={() => deletarDuvida(duvida.id)}>Apagar</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
            <Rodape />
        </div>
    );
};