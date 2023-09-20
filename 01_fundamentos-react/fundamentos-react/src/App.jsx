import "./App.css";

import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndireraPai";
import Input from "./components/formulario/Input";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Card from "./components/layout/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#13 - Mega" color="#b9006e">
          <Mega></Mega>
        </Card>

        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={20}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado" color="#e45f56">
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#59323c">
          <DiretaPai></DiretaPai>
        </Card>

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
