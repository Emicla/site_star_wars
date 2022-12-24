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
                    <li onClick={() => navigate("/startships")}>STARTSHIPS</li>
                    <li onClick={() => navigate("/people")}>PEOPLE</li>
                    <li onClick={() => navigate("/planets")}>PLANETS</li>
                    <li onClick={() => navigate("/species")}>SPECIES</li>
                    <li onClick={() => navigate("/duvidas")}>DÚVIDAS</li>
                    <li onClick={() => navigate("/about")}>ABOUT</li>
                    <li>LOGOFF</li>
                </ul>    
            </nav>        
        </header>
    )
}