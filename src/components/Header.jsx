import { Link } from "react-router-dom"

const Header = () => {
    return (

        <>
        <header style={{backgroundColor:"lightblue"}}>
            <img src="" alt="imagen logo" />
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/*"></Link></li>
                    <button>Cerrar sesion</button>
                </ul>
            </nav>
        </header>
        </>
    )
}

export {Header}