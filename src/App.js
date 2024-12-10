import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';
import { v4 as uuidv4 } from 'uuid'
import Campo from './componentes/Campo';

function App() {

  const [times, setTime] = useState([])

  const [colaboradores, setColaboradores] = useState([])

  const [pesquisa, setPesquisa] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/times')
      .then(resposta => resposta.json())
      .then(dado => setTime(dado))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/colaboradores')
      .then(resposta => resposta.json())
      .then(dado => setColaboradores(dado))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/colaboradores')
    .then((response) => response.json())
    .then((dados) => {
      const resultado = dados.filter((colaborador) =>
        colaborador.cargo.toLowerCase().includes(pesquisa.toLowerCase())
      );
      setColaboradores(resultado);
    })
    .catch((error) => console.error('Erro na pesquisa:', error));
  }, [pesquisa])  

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { favorito: false, id: uuidv4(), ...colaborador };
  
    fetch('http://localhost:8080/colaboradores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoColaborador),
    })
      .then((response) => response.json())
      .then((dados) => {
        setColaboradores((prevColaboradores) => [...prevColaboradores, dados]);
      })
      .catch((error) => console.error('Erro ao adicionar colaborador:', error));
  };

  function cadastrarTime(time) {
    const novoTime = { id: uuidv4(), ...time };
  
    fetch('http://localhost:8080/times', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoTime),
    })
      .then((response) => response.json())
      .then((dados) => {
        setTime((prevTimes) => [...prevTimes, dados]);
      })
      .catch((error) => console.error('Erro ao cadastrar time:', error));
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorTime(cor, id) {
    setTime(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function aoFavoritar(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => ({ id: time.id, nome: time.nome }))}
        aoColaboradorCadastrado={
          colaborador => aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <Campo
        type='text'
        obrigatorio={true}
        label="Pesquisar colaborador"
        placeholder="Digite o nome do colaborador"
        aoAlterado={valor => setPesquisa(valor)}
      />
      {times.map((time, index) =>
        <Times
          favoritar={aoFavoritar}
          key={time.nome + index}
          mudarCor={mudarCorTime}
          aoDeletar={deletarColaborador}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.id)}
        />)}
    </div>
  );
}

export default App;
