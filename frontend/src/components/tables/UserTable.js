import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Card, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function renderUserList(props){
  if(props.userList){
    return (
      props.userList.map(user => (
      <Card key={user._id} style={{ marginBottom: '1rem' }}>
        <CardBody>
          <CardTitle style={{ marginBottom: '1rem' }}>Pacjent: {user.email}</CardTitle>
          <CardSubtitle style={{ marginBottom: '1rem' }}>Rozwiązanych quizów: {user.quizzes.length > 0 ? user.quizzes.length : 0}</CardSubtitle>
          <div className="clearfix">
            <Button className="float-right" outline color="danger" tag={Link} to={`/user-detail/${user._id}`}>Wybierz</Button>
          </div>
        </CardBody>
      </Card>
      )
    ))
  }
  return <p>Loading</p>
}

const UserTable = (props) => {
  return(
    <span className="user-list">
      {renderUserList(props)}
    </span>
  )
}

export default UserTable