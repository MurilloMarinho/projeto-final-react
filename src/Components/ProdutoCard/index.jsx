import { Link } from "react-router-dom";

const ProdutoCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} class="card-img-top" />
            <div class="card-body">
                <p className="card-text">{props.nome}</p><p className="card-text">{props.preco}</p>
            </div>
            <Link to={`/produto/${props.id}`}>
                <button>Ver mais</button>
            </Link>
        </div>
    )
}

export default ProdutoCard;