import { Link, useSearchParams } from "react-router-dom"; // ver si lo agregue sin darle utilidad
import { Layout } from "../components/Layout";
import { useAuth } from "../context/userContext"; // importamos contexto
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/login.module.css"

const Login = () => {
    const [username, setUsername] = useState("")    // creado para capturar inputs
    const [password, setPassword] = useState("")    // creado para capturar inputs
    const navigate = useNavigate()

    const { login } = useAuth()   //{login} es funcion async de context.jsx que se comunica con back mediante fetch
    // distinto de Login, funcion para manejar el login e inputs de este archivo

    const handleLogin = async (e) => {   //funcion que maneja los inputs
        e.preventDefault()

        const isLogin = await login(username, password)          // recibimos de login context y su peticion fetch

        if (isLogin) {
            console.log("logueado con exito")
            setUsername("")
            setPassword("")
            navigate("/ ")
        } else {
            console.error("nombre de usuario o password invalido")
        }

    }

    return (
        <>
            <Layout>
                <div className={styles.loginPage}
                ><section className={styles.contLogin}>
                        <h1 >Inicia sesión</h1>
                        <p>Hola, bienvenido de nuevo</p>
                        <form onSubmit={handleLogin}>
                            <div className={styles.contCredenciales}>
                                <p><strong>Credenciales de prueba</strong></p>
                                <p> <strong>Usuario: </strong> johnd  <br />
                                    <strong>Contraseña: </strong> m38rmF$</p>

                            </div>
                            <div className={styles.contInputs}>
                                <label>Nombre de usuario</label>
                                <input
                                    type="text"
                                    placeholder="Ingresa tu nombre de usuario"
                                    onChange={(e) => setUsername(e.target.value)} //capturamos el valor en linea
                                    value={username}
                                />
                                <label>Contraseña:</label>
                                <input
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    onChange={(e) => setPassword(e.target.value)} //capturamos el valor en linea
                                    value={password}
                                />
                            </div>
                            <button className={styles.contButton}>Ingresar</button>
                        </form>
                        <hr />
                        <p className={styles.contLinkRegister}>¿No tienes una cuenta? <Link className={styles.contWordRegister} to={"/register"} >Registrate</Link> </p>
                    </section></div>

            </Layout>
        </>
    )
}

export { Login }