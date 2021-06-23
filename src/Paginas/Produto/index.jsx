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
            </Link>
        </div>
    )
}

export default Produto

