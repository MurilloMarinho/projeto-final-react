import { useEffect, useState } from "react"
import http from '../../http'

const Produtos = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        http.get('itens').then((response) => setProdutos(response)).catch(erro => console.log(erro))
    }, [])

    return (
        <div>
            {produtos.map((item) =>
                <ProdutoCard key={item.id} nome={item.nome} preco={item.preco} />
            )}
        </div>
    )
}

export default Produtos