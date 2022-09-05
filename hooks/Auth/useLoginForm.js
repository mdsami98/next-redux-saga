import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAction } from "../../store/auth/authAction"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
}).required();

const useLoginForm = (user, login) => {
    const dispatch = useDispatch()
    const [loading, setLoading]= useState(true)
    const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = data => {
      dispatch(loginAction())
    };
      
    
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

