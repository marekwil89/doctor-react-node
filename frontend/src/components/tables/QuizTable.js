import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuizList } from '../../actions/quizActions';
import {
  Link
} from 'react-router-dom';

class QuizList extends Component {
  componentWillMount() {
    this.props.fetchQuizList();
  }
  
  render() {
    const quizItems = this.props.quizList.map(quiz => (
      <li key={quiz._id}>
        <h3>{quiz.title}</h3>
        <Link to={`/quiz-solve/${quiz._id}`}>{quiz.title}</Link>
      </li>
    ));

    return (
      <span className="quiz-list">
        <ul>
          {quizItems}
        </ul>
      </span>
    );
  }
}

QuizList.propTypes = {
  fetchQuizList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  quizList: state.quiz.quizList
});

export default connect(mapStateToProps, { fetchQuizList })(QuizList);
