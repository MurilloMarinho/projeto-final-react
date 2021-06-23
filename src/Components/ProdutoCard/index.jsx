import { Link } from "react-router-dom";

const ProdutoCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{props.nome}</p><p className="card-text">{props.preco}</p>
            </div>
            <Link to={`/produto/${props.id}`}>
                <button>Ver mais</button>
            </Link>
        </div>
    )
}

export default ProdutoCard;