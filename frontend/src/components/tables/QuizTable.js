import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Alert } from 'reactstrap';
import QuizTableItem from './QuizTableItem';

function renderQuizItems(props){
  if(props.quizList){
    let quizList = props.quizList;

    return (
      quizList.length > 0 ? (
        quizList.map(quiz => (
          <QuizTableItem key={quiz._id} quiz={quiz} links={props.links}/>
        ))
      ) : (
        props.links === 'solve' ? (
          <Alert color="danger">
            Brak rekomendowanych badań
          </Alert>
        ) : (
          <Alert color="danger">
            Brak rekomendowanych badań, kliknij <Link to="/recommend">tutaj</Link> aby zarekomendować 
          </Alert>
          )
      )
    )
  }
  return <p>Loading</p>
}

const QuizTable = (props) => {
  return (
    <span className="quiz-list">
      {renderQuizItems(props)}
    </span>
  );
}

export default QuizTable;