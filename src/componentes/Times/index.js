import Colaborador from '../Colaborador'
import './Times.css'  
let data = new Date();
let id = `${data.getFullYear()}${(data.getMonth() + 1).toString().padStart(2, '0')}${data.getDate().toString().padStart(2, '0')}${data.getHours().toString().padStart(2, '0')}${data.getMinutes().toString().padStart(2, '0')}${data.getSeconds().toString().padStart(2, '0')}`;


const Times = (props) => {
    const cor2 = {backgroundColor: props.cor2}
    return(
        props.colaboradores.length > 0 && <section className='times' style={cor2}>
            <h3 style={{borderColor: props.cor1}}>
                {props.nome}
            </h3>      
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador 
            bg={props.cor1}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Times