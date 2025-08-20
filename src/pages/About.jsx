import { Layout } from "../components/Layout"



const About = () => {
    return (
        <Layout>
        <section>

            <div>
                <h1>Sobre Nosotros</h1>
                <p>Conocé más sobre nuestro proyecto y nuestra misión
                </p>
            </div>
            <div>
                <h2>
                    Nuestro Proyecto
                </h2>
                <p>Este es un proyecto de e-commerce desarrollado como parte del curso de React. Se trata de una tienda
                    online completa que simula una experiencia real de compra con funcionalidades de autenticación, gestión de productos y navegación intuitiva.
                    El proyecto demuestra las mejores prácticas de desarrollo frontend, incluyendo gestión de estado,
                    routing, formularios validados y diseño responsive.</p>
            </div>
            <div>
                <h2>
                    Nuestro Público
                </h2>
                <p>Esta aplicación está dirigida a desarrolladores y estudiantes que quieren aprender React
                    y las tecnologías modernas de desarrollo web. También sirve como referencia para
                    implementar funcionalidades comunes en aplicaciones web.
                    Los usuarios pueden explorar productos, registrarse, iniciar sesión y gestionar el catálogo de productos, proporcionando una experiencia completa de e-commerce.</p>
            </div>
            <div>
                <h2>
                    Tecnologías y Enfoques
                </h2>
                <p>Frontend: React 19, React Router DOM, Vite
                    Estilos: CSS moderno con variables, Grid y Flexbox, diseño responsive
                    APIs: FakeStoreAPI para productos y autenticación
                    Enfoques: Componentes funcionales, Hooks, Context API, formularios controlados y validación en tiempo real.</p>
            </div>
        </section>
        </Layout>
    )
}
export { About }