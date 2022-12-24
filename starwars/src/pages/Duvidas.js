import { TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import { salvarDuvida } from '../services/BancoServices';

export default function Duvidas() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [whats, setWhats] = useState("");
    const [duvida, setDuvida] = useState("");

    const cadastrarDuvida = async () => {
        let dados = {
            nome: nome,
            whats: whats,
            duvida: duvida
        }

        try {
            await salvarDuvida(dados);
            navigate("/");

        } catch (erro) {
            alert(erro);
        }
    }

    const limpar = () => {
        setNome("");
        setWhats("");
        setDuvida("");
    }

    return (
        <div>
            <Cabecalho />
            
            <main>
                <TextField
                    style={{ marginBottom: 25 }}
                    className="input-standart"
                    label="Nome"
                    fullWidth={true}
                    variant="standard"
                    type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                />
                <TextField
                    style={{ marginBottom: 25 }}
                    className="input-standart"
                    label="Whats"
                    fullWidth={true}
                    variant="standard"
                    type="text"
                    value={whats}
                    onChange={(e) => { setWhats(e.target.value) }}
                />
                <textarea value={duvida} onChange={(e) => { setDuvida(e.target.value) }}></textarea>
                <button onClick={cadastrarDuvida}>Enviar</button>
                <button onClick={limpar}>Limpar</button>
            </main>

            <Rodape/>
        </div>
    )
}