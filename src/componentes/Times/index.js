import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) => {
    const cor2 = { backgroundColor: props.cor2 }
    return (
        props.colaboradores.length > 0 && <section className='times' style={cor2}>
            <h3 style={{ borderColor: props.cor1 }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => {
                    return <Colaborador
                        bg={props.cor1}
                        key={colaborador.nome + index}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        aoDeletar={props.aoDeletar} />
                })}
            </div>
        </section>
    )
}

export default Times