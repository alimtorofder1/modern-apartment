import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user}=useContext(AuthContext)

    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default PrivetRoute;