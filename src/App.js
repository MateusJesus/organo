import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';

function App() {

  const [times, setTime] = useState([
    {
      nome: 'Programação',
      cor1: '#57C278',
      cor2: '#D9F7E9'
    },
    {
      nome: 'Front End',
      cor1: '#82CFFA',
      cor2: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      cor1: '#A6D157',
      cor2: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor1: '#E06B69',
      cor2: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      cor1: '#DB6EBF',
      cor2: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor1: '#FFBA05',
      cor2: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      cor1: '#FF8A29',
      cor2: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    colaboradores.map((event, index) => {
      if(event.nome+index === id) {
        return console.log('deletando colaborador: ' + event.nome)
      }
    })
  }

  function mudarCorTime(cor, nome) {
    setTime(times.map(time => {
      if (time.nome === nome) {
        time.cor1 = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times = {times.map(time => time.nome)}
        aoColaboradorCadastrado = {
          colaborador => aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map(time => <Times
        mudarCor={mudarCorTime}
        aoDeletar={deletarColaborador}
        key={time.nome}
        nome={time.nome}
        cor1={time.cor1}
        cor2={time.cor2}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
