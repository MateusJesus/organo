import { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Times from "./componentes/Times";
import { v4 as uuidv4 } from "uuid";
import Campo from "./componentes/Campo";
import Modal from "./componentes/Modal";
import Warning from "./componentes/Warning";

const apiKey = process.env.REACT_APP_API_PASSWORD;

function App() {
  const [loading, setLoading] = useState(true);

  const [times, setTime] = useState([]);

  const [colaboradores, setColaboradores] = useState([]);

  const [pesquisa, setPesquisa] = useState([]);

  useEffect(() => {
    fetch("https://organo-api-fm95.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-PASSWORD": apiKey,
      },
    })
      .then((resposta) => resposta.json())
      .then((dado) => {
        setColaboradores(dado.colaboradores);
        setTime(dado.times);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://organo-api-fm95.onrender.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-PASSWORD": apiKey,
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        const resultado = dados.colaboradores.filter((colaborador) => {
          const pesquisaString = typeof pesquisa === "string" ? pesquisa : "";
          return colaborador.nome
            .toLowerCase()
            .includes(pesquisaString.toLowerCase());
        });
        setColaboradores(resultado);
      })
      .catch((error) => console.error("Erro na pesquisa:", error));
  }, [pesquisa]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { favorito: false, id: uuidv4(), ...colaborador };
    setColaboradores((prevColaboradores) => [
      ...prevColaboradores,
      novoColaborador,
    ]);
  };

  function cadastrarTime(time) {
    const novoTime = { id: uuidv4(), ...time };
    setTime((prevTimes) => [...prevTimes, novoTime]);
  }

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorTime(cor, id) {
    setTime(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function aoFavoritar(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  return (
    <div className="App">
      <Warning />
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => ({ id: time.id, nome: time.nome }))}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Campo
        type="text"
        obrigatorio={true}
        label="Pesquisar colaborador"
        placeholder="Digite o nome do colaborador"
        aoAlterado={(valor) => setPesquisa(valor)}
      />
      {loading && <h1>Carregando colaboradores...</h1>}
      {!loading &&
        times.map((time, index) => (
          <Times
            favoritar={aoFavoritar}
            key={time.nome + index}
            mudarCor={mudarCorTime}
            aoDeletar={deletarColaborador}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.id
            )}
          />
        ))}
    </div>
  );
}

export default App;
