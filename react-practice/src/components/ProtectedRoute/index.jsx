import React, {useContext} from "react";
import { AuthContext } from "../../HOC/Auth/AuthContext";
import Login from "../../Pages/Login";

export default function ProtectedRoute({children}) {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        isLoggedIn ? children : <Login />
    )
}