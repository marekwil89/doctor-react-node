import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import { Container,  Row, Col } from 'reactstrap';

const RegisterPage = () => {
  return(
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <RegisterForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage