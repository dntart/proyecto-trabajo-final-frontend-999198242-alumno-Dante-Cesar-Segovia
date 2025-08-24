import { Layout } from "../components/Layout";
import { useState } from "react";
import styles from "../styles/pages/register.module.css"
import { Link } from "react-router-dom";


const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [succes, setSucces] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleUsername = (e) => { // 1ra forma de capturar input y actualizar su valor, solo invocando handle...
        setUsername(e.target.value)
    }
    const handleEmail = (e) => { // 2ra forma de capturar input  y actualizar su valor, repitiendo (e)=> handle..(e)
        setEmail(e.target.value)
    }
    // para Password usamos  // 3ra. funcion en linea del onChange, si solo se busca actualizar su valor conviene esto

    const handleSubmit = (e) => {
        e.preventDefault() // previene refresh
        setError("")
        setSucces("")

        // para validacion  y prevenir error
        if (!username || !email || !password || !confirmPassword) {   // si no hay username, o no hay email, o no hay password ejecuta...
            setError("debes completar los campos")
            return
        }
        if (password != confirmPassword) {
            setError("Las contraseñas no coinciden")
            return
        }
        const newUser = {
            username, // username: username, // si el nombre del estado es el mismo puede usarse directamente 
            email, // email: email, // si el nombre del estado es el mismo puede usarse directamente 
            password, //password: password, // si el nombre del estado es el mismo puede usarse directamente 
            confirmPassword
        }
        console.log(newUser) // vemos el objeto creado en newUser
        setSucces("Registrado con exito")

        //limpiamos estados // luego vamos a cada input para limpiar el valor de los input rellenados 
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

    }
    return (
        <>
            <Layout>
                <div className={styles.registerPage}>
                    <section className={styles.contRegister}>
                        <h1>Registrate</h1>
                        <p>Creá tu cuenta para acceder a todas las</p>
                        <p>funcionalidades</p>

                        <form
                            className={styles.contFormRegister}
                            onSubmit={handleSubmit}>
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
                            <div>
                                <label>Confirmar contraseña:</label>
                                <input type="password"
                                    onChange={(e) => setConfirmPassword(e.target.value)} // opcion 3 en linea
                                    value={confirmPassword} // limpiamos input
                                />
                            </div>
                            <button className={styles.contButton}>Ingresar</button>
                            <hr />
                            <p>¿Ya tenés una cuenta? <Link className={styles.contWordLogin} to={"/login"} >Iniciar sesión</Link></p>
                        </form>
                        {
                            error && <p style={{ color: "red" }}> <strong>{error}</strong> </p>
                        }
                        {
                            succes && <p style={{ color: "green" }}> <strong>{succes}</strong> </p>
                        }
                    </section>
                </div>

            </Layout>
        </>
    )
}

export { Register }