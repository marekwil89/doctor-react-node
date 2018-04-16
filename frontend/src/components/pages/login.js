import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
        <span className="page-login">
          <form>
            <label>
                email:
                <input type="text" name="email" />
            </label>
            <label>
                password:
                <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </span>
    );
  }
}

export default LoginPage;