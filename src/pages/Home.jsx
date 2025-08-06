import { Layout } from "../components/Layout"
import { useEffect } from "react"
import { useState } from "react"


const Home = () => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(true)

    const fetchingProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products", { method: "GET" }) // aclaramos con method:GET que traemoss info, repasar crud
        const data = await response.json() // trasnform json a js
        setProducts(data) // capturamos resultado
        console.log(data)
    }

    // useEffect sirve para ejecutar una funcion en un momento especifico
    useEffect(() => {
        fetchingProducts()
    }, []) // el array vacio [] es la dependencia a.puede estar vacio, b.con una funcion, c. sin array se renderiza siempre

    const handleDelete = async (id) => {
        const response = await fetch(`https://fakestoreapi.com/test/${id}`, 
            {method: "DELETE"})
console.log (response)

 
        }
    return (
        <>
            <Layout background="red">
                <section>
                    <h1>Bienvenido a Nuestra Tienda</h1>
                    <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
                </section>

                <section>
                    <h2>¿Por qué elegirnos?</h2>
                    <ul>
                        <li>
                            <h3>Envíos a todo el país</h3>
                            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
                        </li>
                        <li>
                            <h3>Pagos seguros</h3>
                            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
                        </li>
                        <li>
                            <h3>Atención personalizada</h3>
                            <p>Estamos disponibles para ayudarte en todo momento.</p>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Nuestros productos</h2>
                    <p>Elegí entre nuestras categorías más populares.</p>
                </section>
                <div>
                    {products.map((product) =>
                        <div key={product.id}>
                            <h2> {product.title} </h2>
                            <img style={{ width: "100px" }} src={product.image} alt={`imagen de ${product.title}`} />
                            <p>$ {product.price}</p>
                            <p>{product.description}</p>
                            <p><strong>{product.category}</strong></p>
                            {user &&             // los botones solo se muestran si hay usuario logueado (true), en false los botones no deben aparecer
                                <div>
                                    <button>Actualizar</button>
                                    <button onClick={() => handleDelete(product.id)}>Borrar</button>
                                </div>}
                        </div>


                    )}
                </div>

            </Layout>

        </>
    )
}
export { Home }