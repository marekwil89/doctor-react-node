import React from 'react';
import { Card, CardBody } from 'reactstrap';


function renderUserDetail(props){
  if(props.userDetail){
    return (
      <Card style={{ marginBottom: '1rem' }}>
        <CardBody>
          <h3>Pacjent: {props.userDetail.email}</h3>
        </CardBody>
      </Card>
    ) 
  }
  return <p>Loading</p>
}

const UserDetail = (props) => {
  return(
    <span className="user-profile">
      {renderUserDetail(props)}
    </span>
  )
}

export default UserDetail