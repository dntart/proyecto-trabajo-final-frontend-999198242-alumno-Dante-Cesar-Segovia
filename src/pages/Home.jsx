import { Layout } from "../components/Layout"
import { useEffect } from "react"
import { useState } from "react"
import styles from "../styles/pages/Home.module.css" // ccs module funcionando



const Home = () => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(true)
    const [productToEdit, setProductToEdit] = useState(null) // para editar objeto
    const [showPopup, setShowPopup] = useState(null)
    const [titleEdit, setTitleEdit] = useState("")
    const [priceEdit, setPriceEdit] = useState("")
    const [descriptionEdit, setDescriptionEdit] = useState("")
    const [categoryEdit, setCategoryEdit] = useState("")
    const [imageEdit, setImageEdit] = useState("")
    const [search, setSearch] = useState("") // para determinar valor del buscador


    const fetchingProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products", { method: "GET" }) // aclaramos con method:GET que traemoss info, repasar crud
        const data = await response.json() // trasnform json a js
        setProducts(data) // capturamos resultado
        console.log(data)
    }

    // useEffect sirve para ejecutar una funcion en un momento especifico // UI  
    useEffect(() => {
        fetchingProducts()
    }, []) // el array vacio [] es la dependencia a.puede estar vacio, b.con una funcion, c. sin array se renderiza siempre

    const handleDelete = async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,
            { method: "DELETE" })
        console.log(response)

        if (response.ok) {
            setProducts(prevProducts => prevProducts.filter((product) => product.id != id)) // actualizar estado a partir de estado anterior representado por prevProducts =>
        }
    }

    const handleOpenEdit = (product) => {
        setShowPopup(true)
        setProductToEdit(product)

        setTitleEdit(product.title)  // para importar los inputs con los datos del API 
        setPriceEdit(product.price)
        setDescriptionEdit(product.description)
        setCategoryEdit(product.category)
        setImageEdit(product.image)
    }

    // vinculacion de nuevos valores de inputs y peticion al fetch para enviar lo editado
    const handleUpdate = async (e) => {
        e.preventDefault()

        const updatedProduct = {  // array modificado con onChange
            id: productToEdit.id,
            title: titleEdit,
            price: Number(priceEdit),
            description: descriptionEdit,
            category: categoryEdit,
            image: imageEdit
        }

        //Peticion al backend para modificar -> metodo PUT/PATCH, PUT cambia y crea, PATCH solo cambia

        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            })
            if (response.ok) {
                const data = await response.json()
                setProducts(prevProducts =>              // setProducts -> nuevo valor
                    prevProducts.map((product) =>
                        product.id === productToEdit.id  // condicion si array viejo es igual a array nuevo
                            ? data                      // data el array nuevo es el nuevo valor setProducts
                            : product                   // sino es igual conseva el valor viejo
                    )
                )
            }
            setShowPopup(false)
        } catch (error) {
            console.log(error)
        }

    }

    const filteredProducts = products.filter(product =>  // codigo para filtrar productos mediante input
        product.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <Layout >
                <section className={styles.contWelcome}>
                    <h1>Bienvenido a Nuestra Tienda</h1>
                    <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
                    <h2>¿Por qué elegirnos?</h2>
                </section>

                <section>
                    <ul className={styles.contCaract}>
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
                <div className={styles.contSectionTitle}>
                    <h2>Nuestros productos</h2>
                    <p>Elegí entre nuestras categorías más populares.</p>
                </div>
                <div>
                    <input
                    className={styles.contInputSearch}
                        type="text"
                        placeholder="Busca productos..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // capturamos value input search
                    />
                </div>


                {showPopup &&
                    <section className="popup-edit">
                        <h1>Editando producto</h1>

                        <form onSubmit={handleUpdate}>
                            <label>Nombre del producto:</label>
                            <input type="text" name="title" placeholder="ingrese el nombre del producto"
                                value={titleEdit} //  p ver lo mismo que en la API en el input
                                onChange={(e) => setTitleEdit(e.target.value)} /> {/* para poder editar ese input*/}
                            <label>Precio:</label>
                            <input type="number" name="price" placeholder="ingrese el precio"
                                value={priceEdit}
                                onChange={(e) => setPriceEdit(e.target.value)} />
                            <label>Descripcion:</label>
                            <textarea name="description" placeholder="ingrese una descripcion"
                                value={descriptionEdit}
                                onChange={(e) => setDescriptionEdit(e.target.value)}></textarea>
                            <label>Categoria:</label>
                            <input type="text" name="category" placeholder="ingrese una categoria"
                                value={categoryEdit}
                                onChange={(e) => setCategoryEdit(e.target.value)} />
                            <label >Imagen</label>
                            <input type="text" name="image" placeholder="coloque la url de una imagen"
                                value={imageEdit}
                                onChange={(e) => setImageEdit(e.target.value)} />
                            <button >Guardar cambios</button> {/*2 opciones a) o dentro del <form onSubmit={handle..} o por fuera con un onClick={onClick} */}
                        </form>


                        <button onClick={() => setShowPopup(null)}>Cerrar</button> {/* lo dejo por si el user entra y se arrepiente de editar puede salir sin editar */}
                    </section>
                }

                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) =>
                        <div className={styles.productCont} //cont de cada producto
                            key={product.id}>
                            <div className={styles.contImage}>
                                <img
                                    className={styles.image}
                                    src={product.image} alt={`imagen de ${product.title}`} />
                            </div>
                            <h2
                                className={styles.title}>
                                {product.title} </h2>
                            <p
                                className={styles.price}>
                                $ {product.price}</p>
                            <p
                                className={styles.description}>
                                {product.description}</p>
                            <p className={styles.category}>
                                <strong>{product.category}</strong></p>
                            {user &&             // los botones solo se muestran si hay usuario logueado (true), en false los botones no deben aparecer
                                <div className={styles.buttons}>
                                    <button
                                        className={styles.editButton}
                                        onClick={() => handleOpenEdit(product)}>Editar</button>
                                    <button
                                        className={styles.deleteButton}
                                        onClick={() => handleDelete(product.id)}>Borrar</button>
                                </div>}
                        </div>


                    )}
                </div>

            </Layout>

        </>

    )
}
export { Home }