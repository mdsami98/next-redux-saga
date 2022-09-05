import { Row, Col } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import RegisterForm from "../components/Auth/RegisterForm";
const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <RegisterForm/>
  );
};

export default Register;
