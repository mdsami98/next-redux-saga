import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuthAction } from "../../store/auth/authAction";

const AuthProvider = ({children, ctx}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(checkAuthAction())
    }, [])
    return (
        <>{children}</>
    )
}

export default AuthProvider;