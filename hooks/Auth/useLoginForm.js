import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
  
import { loginSubmitAction } from "../../store/auth/authAction";
import { useRouter } from "next/router";
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

const useLoginForm = () => {
  const router = useRouter()
  const authState = useSelector((state)=>state.auth)

    const dispatch = useDispatch()
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => {
      dispatch(loginSubmitAction(data))
    };

    useEffect(()=>{
      if(authState.login){
        router.push('/');
      }
    }, [authState.login])
    
   const loading = authState.loading;
    return {
      loading,
      register,
      handleSubmit,
      onSubmit,
      errors
    }

}


export default useLoginForm;
// export default connect(mapStateToProps, mapDispatchToProps)(useLoginForm);

