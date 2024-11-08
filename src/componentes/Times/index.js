import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) => {
    const cor = { backgroundColor: props.cor+'B3' }
    return (
        props.colaboradores.length > 0 && <section className='times' style={cor}>
            <input onChange={event => props.mudarCor(event.target.value, props.nome)} className='corTime' type='color' value={props.cor}></input>
            <h3 style={{ borderColor: props.cor }}>
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => {
                    return <Colaborador
                        bg={props.cor}
                        key={colaborador.nome + index}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                        aoDeletar={event => {props.aoDeletar(colaborador.nome+index)}} />
                })}
            </div>
        </section>
    )
}

export default Times