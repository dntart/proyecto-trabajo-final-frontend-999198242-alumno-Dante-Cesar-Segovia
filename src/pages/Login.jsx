import { Layout } from "../components/Layout";
import { useAuth } from "../context/userContext"; // importamos contexto

const Login = () => {                                 
    const { login } = useAuth()// contexto

    const handleLogin = (e) => {
        e.preventDefault()
        login()                                   // Con "l" minuscula funcion del contexto
    } 

    return (
        <>
            <Layout>
                <h1 >Inicia sesión</h1>

                <section>
                    <h2>Hola, bienvenido de nuevo</h2>

                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Correo electronico:</label>
                            <input
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input
                                type="password"
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