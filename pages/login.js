import { Row, Col } from "antd";

import LoginForm from "../components/Auth/LoginForm";
const Login = () => {
  
  return (
    <Row>
      <Col span={12} offset={6}>
        <LoginForm/>
      </Col>
    </Row>
  );
};

export default Login;
