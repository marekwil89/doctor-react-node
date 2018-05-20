import React from 'react';
import RecommendForm from '../components/forms/RecommendForm';
import { Container,  Row, Col } from 'reactstrap';

const RecommendFormPage = () => {
  return(
    <Container>
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <RecommendForm/>
        </Col>
      </Row>
    </Container>
  )
}

export default RecommendFormPage