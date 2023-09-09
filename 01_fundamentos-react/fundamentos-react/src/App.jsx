import './App.css'

import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#04 - Desafio Aleatório" color="#090">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento"  color="#c90">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro"  color="#0fd">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
        </Card>

        <Card titulo="#01 - Primeiro Componente"  color="#a7b">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
