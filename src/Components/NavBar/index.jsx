import { Link } from "react-router-dom"
import "./style.css"


const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="" alt="logo skins" />

                <ul>

                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/produtos">Produtos</Link></li>

                    <li><Link to="/cart">Carrinho</Link></li>

                    <li><Link aria-current="page" to="/login">Entrar</Link></li>

                    <li><Link aria-current="page" to="/signin">Cadastrar-se</Link></li>

                    <li><Link aria-current="page" to="/profile">Perfil</Link></li>

                </ul>

            </nav>
        </header>

    )
}
export default NavBar;