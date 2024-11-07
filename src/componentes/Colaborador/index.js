import { CiTrash } from "react-icons/ci";
import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <CiTrash className='deletar' onClick={props.aoDeletar} />
            <div className='cabecalho' style={{backgroundColor: props.bg}}>
                <img src={props.imagem} alt={`imagem do colaborador ${props.nome}`} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador