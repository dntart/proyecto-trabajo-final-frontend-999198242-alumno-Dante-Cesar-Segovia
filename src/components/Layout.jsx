import { Header } from "./Header"
import { Footer } from "./Footer"

const Layout = (props) => {
    return (
        <>
            <div className={props.background}>
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
