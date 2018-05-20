import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserList } from '../actions/userActions';
import { logedUser } from '../actions/authActions';
import QuizTable from '../components/tables/QuizTable';
import UserTable from '../components/tables/UserTable';
import FilterForm from '../components/forms/FilterForm';
import { Container,  Row, Col } from 'reactstrap';

class DashboardPage extends Component {
  componentWillMount() {
    this.props.fetchUserList();
    this.props.logedUser();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            {this.props.user.type === 'user' ? (
              <span>
                <FilterForm/>
                <QuizTable solvedList={this.props.user.quizzes} quizList={this.props.quizList} links={'solve'} />
              </span>
            ): null}

            {this.props.user.type === 'doctor' ? (
              <span>
                <UserTable userList={this.props.userList} />
              </span>
            ): null}
          </Col>
        </Row>
      </Container>


    );
  }
}

DashboardPage.propTypes = {
  fetchUserList: PropTypes.func.isRequired,
  logedUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quizList: state.quiz.quizList,
  userList: state.user.userList,
  user: state.auth.user,  
});


export default connect(mapStateToProps, { fetchUserList, logedUser })(DashboardPage);