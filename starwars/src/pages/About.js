import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import Emicla from '../assets/img/emicla.jpeg'
import Luis from '../assets/img/luishenrique.jpeg'
import '../assets/css/About.css'
export default function About() {

    return (
        <div>
            <Cabecalho />
            <main className='main-about'>
                <div className='div-dados'>
                    <img src={Emicla} alt="Emiclã"/>
                    <div className='dados'>
                        <p style={{textAlign: "center", fontWeight: 'bold'}}>EMICLÃ LENON DA ROSA</p>
                        <p>RA: 1129842</p>
                        <p>E-mail: emiclalenondarosa@gmail.com</p>
                        <p>Linkedin: <a href='https://www.linkedin.com/in/emicl%C3%A3-lenon-da-rosa/'> Emiclã Lenon da Rosa</a></p>
                    </div>

                </div>
                <div className='div-dados'>
                    <img src={Luis} alt="Luis Henrique"/>
                    <div className='dados'>
                        <p style={{textAlign: "center", fontWeight: 'bold'}}>LUIS HENRIQUE MISTURA DA SILVA</p>
                        <p>RA: 1125146</p>
                        <p>E-mail: mistura.luishenrique@gmail.com</p>
                        <p>Linkedin: <a href='https://www.linkedin.com/in/luis-henrique-mistura-da-silva-35a9051b2/'>Luis Henrique Mistura</a></p>
                    </div>
                </div>
            </main >
            <Rodape />
        </div >
    )
}