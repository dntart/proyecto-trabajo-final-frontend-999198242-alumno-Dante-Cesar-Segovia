import { Layout } from "../components/Layout";

const Login = () => {
    return (
        <>
            <Layout>
                <h1>Inicia sesión</h1>

                <section>
                    <h2>Hola, bienvenido de nuevo</h2>

                    <form>
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
                        <button>Ingresar</button>
                    </form>
                </section>
            </Layout>
        </>
    )
}

export { Login }