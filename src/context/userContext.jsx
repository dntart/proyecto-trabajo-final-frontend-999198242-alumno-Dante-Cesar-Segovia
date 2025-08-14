import { createContext, useContext, useState } from "react";

const UserContext = createContext() // para identificar de que tipo de context es lo llamamos userContext, porque vamos  usar muchos context 

const UserProvider = (props) => {            // creamos provider con nomber userProvider, es el componente mayor que envuelve a los otros componentes
    const [user, setUser] = useState(null)

    const login = () => {
        setUser(true)
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <UserContext.Provider value={{ login, logout, user }}>
            {props.children}
        </UserContext.Provider>

    )
}

const useAuth = () => useContext(UserContext)
export { UserProvider, useAuth }