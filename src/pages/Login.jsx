import { useSearchParams } from "react-router-dom"; // ver si lo agregue sin darle utilidad
import { Layout } from "../components/Layout";
import { useAuth } from "../context/userContext"; // importamos contexto
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("")    // creado para capturar inputs
    const [password, setPassword] = useState("")    // creado para capturar inputs
    const navigate = useNavigate()

    const { login } = useAuth()   //{login} es funcion async de context.jsx que se comunica con back mediante fetch
                                       // distinto de Login, funcion para manejar el login e inputs de este archivo

    const handleLogin = async (e) => {   //funcion que maneja los inputs
        e.preventDefault()
        
      const isLogin =  await login(username, password)          // recibimos de login context y su peticion fetch
        
      if (isLogin) {
        console.log("logueado con exito")
        setUsername("")
        setPassword("")
        navigate("/ ")
      }else{
        console.error("nombre de usuario o password invalido")
      }

    }

    return (
        <>
            <Layout>
                <h1 >Inicia sesión</h1>

                <section>
                    <h2>Hola, bienvenido de nuevo</h2>

                    <form onSubmit={handleLogin}>
                        <div>
                            <p> username: johnd  <br /> password: m38rmF$</p>
                            <label>Nombre de usuario</label>
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value) } //capturamos el valor en linea
                                value={username}
                            />
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)} //capturamos el valor en linea
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