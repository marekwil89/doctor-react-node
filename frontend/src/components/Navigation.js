import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logedUser, logoutUser } from '../actions/authActions';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import {
    Link, withRouter
} from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount() {
    this.props.logedUser();
  }

  onLogout(e){
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/login')    
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">System</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.user.email ? (
              <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/dashboard">
                  Dashboard
                </NavLink>
              </NavItem>

                {this.props.user.type === 'doctor' ? (
                  <NavItem>
                    <NavLink tag={Link} to="/recommend">
                      Zarekomenduj badanie
                    </NavLink>
                  </NavItem>
                ): null}

              <NavItem>
                <NavLink onClick={(e) => this.onLogout(e)}>
                  Wyloguj
                </NavLink>
              </NavItem>
            </Nav>
            ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/login">
                  Logowanie
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/register">
                  Rejestacja
                </NavLink>
              </NavItem>
            </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

logedUser.propTypes = {
  logedUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default withRouter(connect(mapStateToProps, { logedUser, logoutUser })(Navigation));