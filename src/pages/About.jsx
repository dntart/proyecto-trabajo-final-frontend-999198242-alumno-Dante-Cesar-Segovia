import { Layout } from "../components/Layout"
import styles from "../styles/pages/aboutUs.module.css"



const About = () => {
    return (
        <Layout> <>
            <div>
                <h1>Sobre Nosotros</h1>
                <p>Conocé más sobre nuestro proyecto y nuestra misión
                </p>
            </div>
            <section className={styles.contAboutUs}>
                <div>
                    <h2>
                        🎯Nuestro Proyecto
                    </h2>
                    <p>Este es un proyecto de e-commerce desarrollado como parte del curso de React. Se trata de una tienda
                        online completa que simula una experiencia real de compra con funcionalidades de autenticación, gestión de productos y navegación intuitiva.
                        El proyecto demuestra las mejores prácticas de desarrollo frontend, incluyendo gestión de estado,
                        routing, formularios validados y diseño responsive.</p>
                </div>
                <div>
                    <h2>
                        👥Nuestro Público
                    </h2>
                    <p>Esta aplicación está dirigida a desarrolladores y estudiantes que quieren aprender React
                        y las tecnologías modernas de desarrollo web. También sirve como referencia para
                        implementar funcionalidades comunes en aplicaciones web.
                        Los usuarios pueden explorar productos, registrarse, iniciar sesión y gestionar el catálogo de productos, proporcionando una experiencia completa de e-commerce.</p>
                </div>
                <div>
                    <h2>
                        ⚡Tecnologías y Enfoques
                    </h2>
                    <p>Frontend: React 19, React Router DOM, Vite
                        Estilos: CSS moderno con variables, Grid y Flexbox, diseño responsive
                        APIs: FakeStoreAPI para productos y autenticación
                        Enfoques: Componentes funcionales, Hooks, Context API, formularios controlados y validación en tiempo real.</p>
                </div>
            </section>
            <h1>Características técnicas</h1>
            <section className={styles.contTecnicas}>

                <div>
                    <h2>🔐 Autenticación y seguridad</h2>
                    <ul>
                        <li>Sistema de login/logout con Context API</li>
                        <li>Rutas protegidas con PrivateRoute</li>
                        <li>Validación de formularios en tiempo real</li>
                        <li>Manejo de errores y feedback al usuario</li>
                    </ul>
                </div>
                <div>
                    <h2>📱Diseño responsive</h2>
                    <ul>
                        <li>Mobile-first design (hasta 480px)</li>
                        <li>Tablet optimization (hasta 880px)  </li>
                        <li>Desktop experience (881px+)        </li>
                        <li>Grid system adaptable    </li>
                    </ul>
                </div>
                <div>
                    <h2>🔍 Funcionalidades Avanzadas
                    </h2>
                    <ul>
                        <li>Búsqueda de productos en tiempo real  </li>
                        <li>CRUD completo de productos          </li>
                        <li>Modal popup para edición      </li>
                        <li>Loading states y error handlind    </li>
                    </ul>
                </div>
                <div>
                    <h2>🎨 Experiencia de Usuario</h2>
                    <ul>
                        <li>Interfaz intuitiva y moderna</li>
                        <li>Animaciones y transiciones suaves</li>
                        <li>Mensajes de feedback claros</li>
                        <li>Navegación fluida entre páginas</li>
                    </ul>
                </div>
            </section>
        </>

        </Layout>
    )
}
export { About }