import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import './index.css'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <div>
        <Primeiro/>
        <ComParametro 
            titulo="Segundo Componente" 
            subtitulo="Muito legal"/>
    </div>, 
    document.getElementById('root'))