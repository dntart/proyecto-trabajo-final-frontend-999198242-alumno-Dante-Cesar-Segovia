import { Layout } from "../components/Layout";
import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => { // 1ra forma de capturar input y actualizar su valor, solo invocando handle...
        setUsername(e.target.value)
    }
    const handleEmail = (e) => { // 2ra forma de capturar input  y actualizar su valor, repitiendo (e)=> handle..(e)
        setEmail(e.target.value)
    }
    // para Password usamos  // 3ra. funcion en linea del onChange, si solo se busca actualizar su valor conviene esto

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username, // username: username, // si el nombre del estado es el mismo puede usarse directamente 
            email, // email: email, // si el nombre del estado es el mismo puede usarse directamente 
            password //password: password, // si el nombre del estado es el mismo puede usarse directamente 
        }
        console.log(newUser) // vemos el objeto creado en newUser

        //limpiamos estados // luego vamos a cada input para limpiar el valor de los input rellenados 
        setUsername("")
        setEmail("")
        setPassword("")

    }
    return (
        <>
            <Layout>
                <h1>Registrate</h1>

                <section>
                    <h2>Hola, bienvenido</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input type="text"
                                onChange={handleUsername}
                                // onChange={(e) => {setUsername(e.target.value); console.log("holaaa") }}
                                value={username} // limpiamos input
                            />
                        </div>
                        <div>
                            <label>Correo electronico:</label>
                            <input type="text"
                                onChange={(e) => handleEmail(e)} // opcion 2 repitiendo funcion e invocando handle..
                                value={email} // limpiamos input
                            />
                        </div>
                        <div>
                            <label>Contraseña:</label>
                            <input type="password"
                                onChange={(e) => setPassword(e.target.value)} // opcion 3 en linea
                                value={password} // limpiamos input
                            />
                        </div>
                        <button>Ingresar</button>
                    </form>
                </section>
            </Layout>
        </>
    )
}

export { Register }