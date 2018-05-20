import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser, clearErrors, logedUser, setErrors } from '../../actions/authActions';
import { Card, CardBody, Button, Form, CardTitle, FormGroup, Label, Input, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test3',
      password: 'test3',
      type: 'doctor',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.type
    };

    this.props.registerUser(user)
    .then(res => res.json())
    .then(res => {
      if(res.param === false){
        this.props.setErrors(res)
      }
      else{
        this.props.clearErrors()        
        this.props.logedUser()
        this.props.history.push('/dashboard')        
      }
    });
  }

  renderErrors(){
    if(this.props.errors){
      return (
        this.props.errors.map((error, index) => (
          <ListGroupItem  key={index} color="danger">
            {error.msg}
          </ListGroupItem>
        ))
      )
    }
    return null;
  }

  render() {
    return (
      <Card  style={{ marginTop: '3rem' }}>
        <CardBody>
          <CardTitle>Zarejestruj się</CardTitle>
        </CardBody>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup row>
              <Label for="field-email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input 
                  type="text" 
                  name="email" 
                  onChange={this.onChange} 
                  value={this.state.email} 
                  id="field-email" 
                  placeholder="jankowalski@mail.com" 
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="field-Password" sm={2}>Hasło</Label>
              <Col sm={10}>
                <Input 
                  type="password" 
                  name="password" 
                  onChange={this.onChange} 
                  value={this.state.password} 
                  id="field-Password" 
                  placeholder="Twoje hasło" 
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="field-type">Typ konta</Label>
              <Input 
                type="select" 
                name="type"
                onChange={this.onChange}
                value={this.state.type}
                id="field-type"
              >
                <option value="doctor">Doctor</option>
                <option value="user">user</option>
              </Input>
            </FormGroup>
            <ListGroup style={{ marginBottom: '1rem' }}>
              {this.renderErrors()}
            </ListGroup>
            <div className="clearfix">
              <Button className="float-right" style={{ marginTop: '1rem' }} outline color="danger" disabled={!this.state.email || !this.state.password || !this.state.type} type="submit">Zarejestruj się</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.auth.errors.errors
});

export default withRouter(connect(mapStateToProps, { registerUser, clearErrors, setErrors, logedUser })(RegisterForm));