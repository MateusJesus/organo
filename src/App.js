import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [times, setTime] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const novoColaborador = { id: uuidv4(), ...colaborador }
    setColaboradores([...colaboradores, novoColaborador])
  }

  function cadastrarTime(time) {
    setTime([...times, { id: uuidv4(), ...time  }])
  }

  function deletarColaborador(id) {
    colaboradores.filter(colaborador => {
      if (colaborador.id === id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
      }
    })
  }

  function mudarCorTime(cor, id) {
    setTime(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => ({id:time.id,nome:time.nome}))}
        aoColaboradorCadastrado={
          colaborador => aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time,index) => <Times
        key={time.nome+index}
        mudarCor={mudarCorTime}
        aoDeletar={deletarColaborador}
        idTime={time.id}
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.id)}
      />)}
    </div>
  );
}

export default App;
