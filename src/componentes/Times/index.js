import Colaborador from '../Colaborador'
import './Times.css'

const Times = (props) => {
    const cor = { backgroundColor: props.time.cor + '80' }
    return (
        props.colaboradores.length > 0 &&
        <section className='times' style={cor}>
            <input
                onChange={event => props.mudarCor(event.target.value, props.time.id)} className='corTime'
                type='color'
                value={props.time.cor}>
            </input>
            <h3 style={{ borderColor: props.time.cor }}>
                {props.time.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => {
                    return (
                        <Colaborador
                            favoritar={props.favoritar}
                            bg={props.time.cor}
                            colaborador={colaborador}
                            key={colaborador.id}
                            aoDeletar={() => { props.aoDeletar(colaborador.id) }}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Times