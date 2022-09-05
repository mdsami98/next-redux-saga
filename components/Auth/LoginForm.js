import React from "react";
// import { Button, Form, Input } from "antd";
import Link from "next/link";
import useLoginForm from "../../hooks/Auth/useLoginForm";
import { authData } from "../../store/auth/authReducer";
import { useSelector } from "react-redux";


const LoginForm = (props) => {
  const { loading, register, handleSubmit, onSubmit, errors } = useLoginForm();
  const authState = useSelector(authData);
  return (
    <div className="text-center marginTop100">
      {/* {process.env.customKey} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <input {...register("password")} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
