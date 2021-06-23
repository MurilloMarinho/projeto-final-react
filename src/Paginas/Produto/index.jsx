import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import http from "../../http"

const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produtos/' + id)
            .then(response => setProduto(response.data))

    }, [id])

    return (
        <div>
            <a>
                {produto.nome}
            </a>
            <a>
                {produto.preco}
            </a>
            <a>
                Quantidade
            </a>
            <button>
                Adicionar ao carrinho
            </button>
        </div>
    )
}

export default Produto

