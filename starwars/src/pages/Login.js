import { Input, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css' 

export default function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div className='div-login'>
            <h1>CHUBAKA LOGIN</h1>
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
                
                <input type="checkbox"/>
                <label>Lembrar-me</label>
            </div>
            <div className='div-buttons'>
                <button className='btnLogin' onClick={() => {
                    navigate('/menu')
                }}> LOGIN </button>
                <button className='btnClear'>CLEAR</button>
            </div>
        </div>
    );
};