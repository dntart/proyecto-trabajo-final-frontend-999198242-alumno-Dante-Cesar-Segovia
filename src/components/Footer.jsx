import { Link } from "react-router-dom"
import styles from "../styles/components/Footer.module.css" //css module 

const Footer = () => {
    return (
        <footer className={styles.contFooter}>
            <div className={styles.marca}>
                <h3>Mi Tienda</h3>
                <p>Tu tienda online de confianza con los mejores productos y atención personalizada.
                </p>
            </div>
            <div className={styles.enlaces}>
                <h3> Enlaces útiles</h3>
                <ul>
                    <li><Link to={"/"}>Inicio</Link></li>
                    <li><Link to={"/about"}>Sobre Nosotros</Link></li>
                    <li><Link to={"/login"}>Iniciar Sesión</Link></li>
                    <li><Link to={"/register"}>Registrarse</Link></li>

                </ul>
            </div>
            <div className={styles.contacto}>
                <h3>Contacto                </h3>
                <p>Desarrollado por <a href="https://ar.linkedin.com/in/dante-cesar-segovia-583046258?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">Dante César Segovia</a></p>
                <p>© 2024 Mi Tienda. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export { Footer }