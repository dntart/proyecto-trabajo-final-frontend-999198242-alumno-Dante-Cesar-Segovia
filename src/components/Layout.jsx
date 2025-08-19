import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = (props) => {
    return (
        <>
            <div >
                <Header />
                <main>  {/*main no es componente si etiqueta HTML por eso no se importa*/}
                    {props.children}
                </main>
                <Footer />
            </div>

        </>
    )
}

export { Layout }
