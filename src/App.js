import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';

function App() {

  const [times, setTime] = useState([
    {
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      nome: 'Front End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
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
        time.cor = cor
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
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
