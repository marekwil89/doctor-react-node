import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  }

  render() {
    return (
      <span className="login-form">
        <form onSubmit={this.onSubmit}>
          <h3>Login form</h3>
          <label>
              email:
              <input
                type="text"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
          </label>
          <label>
              password:
              <input
                type="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </span>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default connect(null, { loginUser })(LoginForm);