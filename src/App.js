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

  function deletarColaborador(id) {
    colaboradores.filter(colaborador => {
      if (colaborador.id === id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
      }
    })
  }

  function mudarCorTime(cor, nome) {
    setTime(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={
          colaborador => aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map(time => <Times
        mudarCor={mudarCorTime}
        aoDeletar={deletarColaborador}
        key={time.nome}
        nome={time.nome}
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
