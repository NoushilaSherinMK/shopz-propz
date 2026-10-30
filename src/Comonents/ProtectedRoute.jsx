import React from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const ProtectedRoute =({children,requiredRole}) =>{
    const isAuthenticated = useSelector((state) => state.userState.isAuthenticated);
    const user = useSelector( (state) => state.userState.user);
   
 console.log("isAuthenticated:", isAuthenticated);

    if(!isAuthenticated)
    {
        return  <Navigate to={"/login"} replace />
       
    }
            if(requiredRole && !requiredRole.includes(user?.role)){
                 return  <Navigate to={"/unauthorized"} replace />
            }

        return children;
    }

export default ProtectedRoute
