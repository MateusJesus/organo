import { CiTrash } from "react-icons/ci";
import { GoHeartFill, GoHeart } from "react-icons/go";
import './Colaborador.css'

const Colaborador = (props) => {
    function aoFavoritar() {
        props.favoritar(props.colaborador.id)
    }

    const propsFavoritar = {
        size: 20,
        onClick: aoFavoritar
    }
    return (
        <div className='colaborador'>
            <CiTrash className='deletar' onClick={props.aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: props.bg }}>
                <img
                    src={props.colaborador.imagem}
                    alt={`imagem do colaborador ${props.colaborador.nome}`}
                />
            </div>
            <div className='rodape'>
                <h4>{props.colaborador.nome}</h4>
                <h5>{props.colaborador.cargo}</h5>
                <div className="favorito">
                    {props.colaborador.favorito ?
                        <GoHeartFill {...propsFavoritar} /> :
                        <GoHeart {...propsFavoritar} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador