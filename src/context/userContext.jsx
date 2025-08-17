import { createContext, useContext, useState } from "react";

const UserContext = createContext() // para identificar de que tipo de context es lo llamamos userContext, porque vamos  usar muchos context 

const UserProvider = (props) => {            // creamos provider con nomber userProvider, es el componente mayor que envuelve a los otros componentes
    const [user, setUser] = useState(null)                     // 1) USER

    const login = async (username, password) => {              // 2)LOGIN

        const response = await
            fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
        if (response.ok) {
            const token = await response.json()
            setUser(true)
            return token
        } else {
            return false
        }

    }
    const logout = () => {                                      // 3) LOGOUT
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