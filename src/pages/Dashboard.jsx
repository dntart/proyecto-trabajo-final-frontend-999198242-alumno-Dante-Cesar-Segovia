import { Layout } from "../components/Layout";
import { useState } from "react";

const Dashboard = () => {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    const handleSubmit = async (e) => {      // para agregar producto
        e.preventDefault()

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
                headers: { 'Content-Type': 'application/json' },    // le decimos a la APY que va un json 
                body: JSON.stringify(newProduct)                       // Convertimos el js a json
            })
            const data = await response.json()
            console.log("producto enviado con exito", data)
            alert("producto enviado con exito")
            console.log(data)

            setName("")  // para limpiar inputs
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
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label>Precio:</label>
                        <input type="number" name="precio"
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div>
                        <label>Descripción:</label>
                        <textarea name="descripcion" rows="4"
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <button>Guardar producto</button>
                </form>


            </section>
        </Layout>
    </>
)
    }

export { Dashboard }