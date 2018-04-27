import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchQuizDetail } from '../actions/quizActions';

class QuizSolvePage extends Component {
  constructor(props) {
    super(props);
    this.state = null;

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.renderQuizForm = this.renderQuizForm.bind(this);
  }

  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.fetchQuizDetail(id);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }

  renderQuizForm(){
    if(this.props.quizDetail.questions){
      return (
        this.props.quizDetail.questions.map(question => (
          <div>
            <h3>{question.text}</h3>
            {
              question.answers.map(answer => (
                <div>
                  <h3>{answer.text}</h3>
                </div>
              ))
            }
          </div>
        ))
      )
    }
    return <p>Loading</p>
  }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//   }

  render() {
    return (
      <span className="quiz-solve-page">
        {this.renderQuizForm()}
      </span>
    );
  }
}

QuizSolvePage.propTypes = {
  fetchQuizDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quizDetail: state.quiz.quizDetail
});

// export default connect(mapStateToProps, { fetchQuizList })(QuizList);

export default connect(mapStateToProps, {fetchQuizDetail})(QuizSolvePage);