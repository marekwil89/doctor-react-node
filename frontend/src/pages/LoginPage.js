import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { Container,  Row, Col } from 'reactstrap';


const LoginPage = () => {
  return(
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <LoginForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage