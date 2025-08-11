import { Layout } from "../components/Layout";
import { useState } from "react";

const Dashboard = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [error, setError] = useState(null)
    const [product, setProduct] = useState(null)


    const handleSubmit = async (e) => {      // para agregar producto
        e.preventDefault()
        setError(null)

        if (!name || !price || !description) {             // validacion:prevenimos campos vacios
            setError("debes completar todos los campos")
            return                             // este return detiene el codigo si se cumple la condicion
        }
        if (name.length < 3) {
            setError("el nombre debe contener mas de 2 caracteres")
            return

        }


        const newProduct = {
            id: crypto.randomUUID(),   // metodo mas usado para dar un id que que no se repita
            title: name,               // la API espera una propiedad title 
            price: parseFloat(price),  // convertir a numero
            description: description,
            category: "una categoria de ej.",
            image: "imagen pendiente"
        }
        console.log(newProduct)

        try {
            const response = await fetch('https://fakestoreapi.com/products', { // este formato viene en la API *(en la web)
                method: 'POST',                                       // metodo de envio ENVIAR POST
                headers: { 'Content-Type': 'application/json' },    // le decimos a la API que va un json 
                body: JSON.stringify(newProduct)                       // Convertimos el js a json
            })
            const data = await response.json()
            console.log("producto enviado con exito", data)
            alert("producto enviado con exito")
            console.log(data)

            setProduct(data)                   // para mostrar en el dom product && le damos el valor devuelto de la API

            setName("")                       // para limpiar inputs
            setPrice("")
            setDescription("")
        }
        catch (error) {

            console.error("error al enviar el produco", error)
            alert("error al enviar el produco")
        }



    }


    return (
        <>
            <Layout>
                <h1>Panel de Administración</h1>

                <section>
                    <h2>Cargar nuevo producto</h2>
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label>Nombre del producto:</label>
                            <input type="text" name="nombre"
                                onChange={(e) => setName(e.target.value)}
                                value={name} />
                        </div>

                        <div>
                            <label>Precio:</label>
                            <input type="number" name="precio"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price} />
                        </div>

                        <div>
                            <label>Descripción:</label>
                            <textarea name="descripcion" rows="4"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description} />
                        </div>
                        {
                            error && <p className="error"><strong>{error}</strong></p>
                        }
                        <button>Guardar producto</button>
                    </form>

                    {
                        product && <div>
                            <h1>{product.title}</h1>
                            <p>precio: ${product.price}</p>
                            <p>descripcion: {product.description}</p>
                        </div>
                    }
                </section>
            </Layout>
        </>
    )
}

export { Dashboard }