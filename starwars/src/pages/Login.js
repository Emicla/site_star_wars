import { TextField } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css'

import login from '../services/AutenticadorServices';

export default function Login(props){
    const navigate = useNavigate();
    
    const [lembrarme, setLembrarme] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useLayoutEffect(() => {
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("senha"));
    }, [])

    const validar = async () => {

        try {
            await login(email, password);
            sessionStorage.setItem("login", true);
            props.verificarLogin();
            navigate("/menu");

        } catch (erro) {
            alert(erro);
        }
    }

    const limpar = () => {
        setEmail("");
        setPassword("");
    }

    const armazenarEmailSenha = () => {
        setLembrarme(!lembrarme);
        if (!lembrarme) {
            localStorage.setItem("email", email);
            localStorage.setItem("senha", password);
        } else {
            localStorage.removeItem("email", email);
            localStorage.removeItem("senha", password);
        }
    }

    return (
        <div className='div-login'>
            <h1>CHEWBACCA LOGIN</h1>
            <div className='div-form-login'>
            <TextField
                    style={{ marginBottom: 25 }}
                    className="input-standart"
                    label="E-mail"
                    fullWidth={true}
                    variant="standard"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <TextField
                    style={{ marginBottom: 25 }}
                    className="input-standart"
                    label="Password"
                    fullWidth={true}
                    variant="standard"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                
                <input type="checkbox" checked={lembrarme} onChange={armazenarEmailSenha}/>
                <label>Lembrar-me</label>
            </div>
            <div className='div-buttons'>
                <button className='btnLogin' onClick={validar}> LOGIN </button>
                <button className='btnClear' onClick={limpar}>CLEAR</button>
            </div>
        </div>
    );
};