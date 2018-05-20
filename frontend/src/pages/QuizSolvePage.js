import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchQuizDetail, fetchSolvedQuiz } from '../actions/quizActions';
import { Container, Row, Col, Card, CardBody, CardSubtitle, Button, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class QuizSolvePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizDetail: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.renderQuizForm = this.renderQuizForm.bind(this);
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.fetchQuizDetail(id);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      quizDetail: nextProps.quizDetail,
    })
  }
  
  onChange(questionIndex, answerIndex){
    let quizDetailCopy = Object.assign({}, this.state.quizDetail);

    quizDetailCopy.questions[questionIndex].answers[answerIndex].selected = !quizDetailCopy.questions[questionIndex].answers[answerIndex].selected

    this.setState({
      quizDetail: {...quizDetailCopy}
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchSolvedQuiz(this.state.quizDetail)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.param === true){
        this.props.history.push('/dashboard')
      }
    });
  }

  validationSelected(){
    let validStatus = undefined;
    const questionsStatus = [];

    if(this.state.quizDetail){
      this.state.quizDetail.questions.map((question) => {
        const arr = question.answers.every(answer => !answer.selected)
        questionsStatus.push(arr);
      })

      validStatus = questionsStatus.some(status => status === true);
      return validStatus;
    }
    return true;
  }

  renderQuizForm(){
    if(this.props.quizDetail.questions){
      return (
        this.props.quizDetail.questions.map((question, questionIndex) => (
          <Card key={question._id}>
            <CardBody>
              <CardTitle>Treść pytania: {question.text}</CardTitle>
              <CardSubtitle>Odpowiedzi:</CardSubtitle>
            </CardBody>
            <CardBody>
              {
                question.answers.map((answer, answerIndex) => (
                  <FormGroup key={answer._id} check>
                    <Label check>
                        <Input id={answer._id} onChange={(e) => this.onChange(questionIndex, answerIndex)} type="checkbox" />
                    {answer.text}
                    </Label>
                  </FormGroup>
                ))
              }
          </CardBody>
        </Card>
        ))
      )
    }
    return <p>Loading</p>
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Form onSubmit={this.onSubmit}>
              {this.renderQuizForm()}
              <div className="clearfix">
                <Button  style={{ marginTop: '1rem' }} outline color="danger" className="float-right" disabled={this.validationSelected()} type="submit">Prześlij</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

QuizSolvePage.propTypes = {
  fetchQuizDetail: PropTypes.func.isRequired,
  fetchSolvedQuiz: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quizDetail: state.quiz.quizDetail
});

export default withRouter(connect(mapStateToProps, {fetchQuizDetail, fetchSolvedQuiz})(QuizSolvePage));