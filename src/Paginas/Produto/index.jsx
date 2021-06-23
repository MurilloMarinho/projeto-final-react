import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"
import { Link } from "react-router-dom";

const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produtos/' + id)
            .then(response => setProduto(response.data))

    }, [id])

    return (
        <div>
            <Link>
                {produto.nome}
            </Link>
            <Link>
                {produto.preco}
<<<<<<< HEAD
            </Link>
=======
            </a>
            <a>
                Quantidade
            </a>
            <button>
                Adicionar ao carrinho
            </button>
>>>>>>> 787555751958897e4cc0e5cf519f2db5d0b4291d
        </div>
    )
}

export default Produto

