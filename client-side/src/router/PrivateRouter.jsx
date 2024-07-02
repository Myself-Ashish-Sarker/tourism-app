import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading) {
        return <span className="loading loading-dots loading-3xl"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
}

export default PrivateRouter