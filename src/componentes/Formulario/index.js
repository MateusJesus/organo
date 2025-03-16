import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          type="text"
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          type="text"
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.cadastrarTime({
            nome: nomeTime,
            cor: corTime === "" ? "#ffaabb" : corTime,
          });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          type="text"
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do seu time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio={true}
          label="Cor do time"
          placeholder="Digite sua cor"
          valor={corTime === "" ? "#ffaabb" : corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
