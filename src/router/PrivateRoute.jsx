import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const {user,loading} = useContext(AuthContext)
    
    if(loading){
        return <span className='loading loading-ring loading-lg'></span>
    }
    if(user){
        return children
    }
    return <Navigate to={"/signIn"} state={location?.pathname}></Navigate>
};

export default PrivateRoute;