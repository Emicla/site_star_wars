import { useNavigate } from 'react-router-dom';

export default function Cabecalho(){
    const navigate = useNavigate();

    return(
        <header>
            <h1> CHEWBACCA MENU APP </h1>
            <nav>
                <ul className="lista-menu">
                    <li onClick={() => navigate("/")}>HOME</li>
                    <li onClick={() => navigate("/films")}>FILMS</li>
                    <li>STARTSHIPS</li>
                    <li>PEOPLE</li>
                    <li>PLANETS</li>
                    <li>SPECIES</li>
                    <li onClick={() => navigate("/duvidas")}>DÚVIDAS</li>
                    <li>ABOUT</li>
                    <li>LOGOFF</li>
                </ul>    
            </nav>        
        </header>
    )
}