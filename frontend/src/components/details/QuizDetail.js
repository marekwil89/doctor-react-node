import React from 'react';
import {
  Link
} from 'react-router-dom';

function renderQuizDetail(props){
  console.log(props);
  if(props.quizDetail){
    return (
      <span>
        <h3>
      </span>
    )
  }
  return <p>Loading</p>
}

const QuizDetail = (props) => {
  console.log(props)
  return(
    <p>detal</p>
  )
}

export default QuizDetail