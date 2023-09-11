import "./App.css";

import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Card from "./components/layout/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#09 - Renderização Condicional" color="#982395">
          <UsuarioInfo usuario={{ nome: "Paulo" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: "fe@email.com" }}></UsuarioInfo>
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={21}></ParOuImpar>
        </Card>

        <Card titulo="#07 - Lista Produtos" color="#a99">
          <ListaProdutos></ListaProdutos>
        </Card>

        <Card titulo="#06 - Repetição" color="#f50">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#4f0">
          <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#090">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#c90">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#0fd">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#a7b">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
}
