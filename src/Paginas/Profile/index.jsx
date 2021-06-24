import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './styles.css'
import http from "../../http"

const Profile = () => {

    let [user, setUser] = useState({})

    useEffect(() => {
        http.get('')
    }, [])

    return (
        <div className="profileArea">



            {/* <Link to={`pedidos/${id}`}> */}
            <button>
                Pedidos
            </button>
            {/* </Link> */}
        </div>
    )
}

export default Profile