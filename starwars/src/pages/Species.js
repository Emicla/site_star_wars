import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

export default function Species(){

    const buscarApi = () => {
        axios.get("https://swapi.dev/api/species/")
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