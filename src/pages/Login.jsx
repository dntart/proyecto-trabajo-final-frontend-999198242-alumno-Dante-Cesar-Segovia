import { useSearchParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/userContext"; // importamos contexto
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")    // creado para capturar inputs
    const [password, setPassword] = useState("")    // creado para capturar inputs

    const { login } = useAuth()                    // destructuracion contexto

    const handleLogin = (e) => {
        e.preventDefault()
        login(username, password)                                   // Con "l" minuscula funcion del contexto
        console.log(username, password)
        setUsername("")
        setPassword("")

    }

    return (
        <>
            <Layout>
                <h1 >Inicia sesión</h1>

                <section>
                    <h2>Hola, bienvenido de nuevo</h2>

                    <form onSubmit={handleLogin}>
                        <div>
                            <p> // "username": johnd   "password": m38rmF$</p>
                            <label>Nombre de usuario</label>
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <button >Ingresar</button>
                    </form>
                </section>
            </Layout>
        </>
    )
}

export { Login }