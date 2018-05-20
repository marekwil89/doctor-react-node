import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, ListGroupItemHeading, Alert, Collapse } from 'reactstrap';


class QuizTableItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const quiz = this.props.quiz;
    return (
      <Card>
        <CardBody>
          <CardTitle style={{ marginBottom: '1rem' }}>Nazwa Badania: {quiz.title}</CardTitle>
          <CardSubtitle style={{ marginBottom: '1rem' }}>Kategoria: {quiz.category}</CardSubtitle>
          {this.props.links === 'solve' ? (
            <div className="clearfix">
              <Button className="float-right" outline color="danger" tag={Link} to={`/quiz-solve/${quiz._id}`}>Rozwiąż</Button>
            </div>
          ) : null}
          {this.props.links === 'detail' ? (
            <div className="clearfix">
              <Button style={{ marginBottom: '1rem' }} className="float-right" onClick={this.toggle} outline color="success">Rozwiń odpowiedzi</Button>
            </div>
          ) : null}
          {this.props.links === 'detail' ? (
          quiz.questions.map((question, questionIndex) => (
            <Collapse isOpen={this.state.collapse}>
              <ListGroup style={{ margin: '0' }}  key={question._id}>
                <ListGroupItem>
                  <ListGroupItemHeading>treść pytania: {question.text}</ListGroupItemHeading>
                  <small>
                    udzielone odpowiedzi:
                  </small>
                  <ListGroup style={{ marginBottom: '1rem', marginTop: '1rem' }}>
                    {
                      question.answers.map(answer => (
                          answer.selected ? (
                          <ListGroupItem key={answer._id} color="success">{answer.text}</ListGroupItem>
                          ) : null
                      ))
                    }
                  </ListGroup>
                </ListGroupItem>
              </ListGroup>
            </Collapse>
          ))
        ) : null}
        </CardBody>
      </Card>
    );
  }
}

export default QuizTableItem