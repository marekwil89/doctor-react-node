import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchUserList } from '../../actions/userActions';
import { fetchQuizListOthers } from '../../actions/quizActions';
import { fetchUserRecommend } from '../../actions/userActions';
import { Card, CardBody, Button, Form, FormGroup, CardTitle, Label, Input } from 'reactstrap';


class RecommendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      quizId: undefined,
    };

    this.onSelectUser = this.onSelectUser.bind(this);
    this.onSelectQuiz = this.onSelectQuiz.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUserList();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.userList !== this.props.userList) {
      if(nextProps.userList.length > 0) {
        this.props.fetchQuizListOthers({selectedUserId: nextProps.userList[0]._id});
        this.setState({
          userId: nextProps.userList[0]._id,
        })
      }
    }
    if(nextProps.quizList !== this.props.quizList){
      if((nextProps.quizList.length > 0)? (
        this.setState({
          quizId: nextProps.quizList[0]._id,
        }) 
      ) : null);
    };
  }

  onSelectUser(event) {
    this.setState({
      userId: event.target.value,
    })

    this.props.fetchQuizListOthers({selectedUserId: event.target.value});
    if(this.props.quizList.length > 0){
      this.setState({
        quizId: undefined
      }) 
    }
  }

  onSelectQuiz(event) {
    this.setState({
      quizId: event.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const recommend = {
      userId: this.state.userId,
      quizId: this.state.quizId,
    };

    this.props.fetchUserRecommend(recommend);

    this.setState({
      userId: this.props.userList[0]._id,
      quizId: this.props.quizList[0]._id,
    })

    if(this.props.quizList.length > 0){
      this.setState({
        quizId: undefined
      }) 
    }
  }

  renderRecommendForm(){
    if(this.props.userList){
      return (
        <span>

          <FormGroup>
            <Label for="field-user">Wybierz pacjenta</Label>
            <Input 
              name="userId" 
              value={this.state.userId} 
              onChange={this.onSelectUser}
              type="select" 
              id="field-user"
            >
              {
                this.props.userList.map((user) => (
                  <option key={user._id} value={user._id}>{user.email}</option>
                ))
              }
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="field-quiz">Wybierz badanie</Label>
            <Input 
              name="quizId" 
              value={this.state.quizId} 
              onChange={this.onSelectQuiz}
              type="select" 
              id="field-quiz"
            >
              {
                this.props.quizList.map((quiz) => (
                  <option key={quiz._id} value={quiz._id}>{quiz.title}</option>
                ))
              }
            </Input>
          </FormGroup>
        </span>
      )
    }
    return <p>Loading</p>
  }

  render() {
    return (
      <Card style={{ marginTop: '3rem' }}>
        <CardBody>
          <CardTitle>Rekomendacja Badania</CardTitle>
        </CardBody>
        <CardBody>
        <Form onSubmit={this.onSubmit}>
          {this.renderRecommendForm()}
          <div className="clearfix">
            <Button className="float-right" style={{ marginTop: '1rem' }} outline color="danger" disabled={!this.state.userId || !this.state.quizId} type="submit">Rekomenduj</Button>
          </div>
        </Form>
        </CardBody>
      </Card>
    );
  }
}

RecommendForm.propTypes = {
  fetchUserList: PropTypes.func.isRequired,
  fetchQuizListOthers: PropTypes.func.isRequired,
  fetchUserRecommend: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quizList: state.quiz.quizList,
  userList: state.user.userList,
});

export default connect(mapStateToProps, {fetchUserList, fetchQuizListOthers, fetchUserRecommend})(RecommendForm);