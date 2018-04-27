import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <span className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/login">Logowanie</Link>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </span>
    );
  }
}

export default Navigation;