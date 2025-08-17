import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/userContext"      // contexto importado

const Header = () => {
    // const [user, setUser] = useState(false) // antigua forma de manejar el login y logout de las pages
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }


    return (

        <>
            <header style={{ backgroundColor: "lightblue" }}>
                <img src="data:image/png;base64,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" alt="imagen logo" />
                <nav>
                    <ul>
                        {user && <>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <button onClick={handleLogout}>Cerrar Sesion</button>


                        </>}
                        {!user && <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>

                        </>}
                    </ul>

                </nav>
            </header>
        </>
    )
}

export { Header }