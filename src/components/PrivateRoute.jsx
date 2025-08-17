import { useAuth } from "../context/userContext";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => { //es lo mismo =(props)=>{const children=props.children}
    const { user } = useAuth
if(!user) {
    return <Navigate to="/login" replace/>      // si no hay user navegamos a login de nuevo
}    
return children                                // else => si hay user vamos children(dashboard)
}

export { PrivateRoute }