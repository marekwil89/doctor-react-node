import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserDetail } from '../actions/userActions';
import UserDetail from '../components/details/UserDetail';
import QuizTable from '../components/tables/QuizTable';
import { Container,  Row, Col } from 'reactstrap';


class UserDetailPage extends Component {
  componentWillMount() {
    const {id} = this.props.match.params;
    this.props.fetchUserDetail(id);
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <UserDetail userDetail={this.props.userDetail}/>
            <QuizTable quizList={this.props.userDetail.quizzes} links={'detail'} />
          </Col>
        </Row>
      </Container>
    );
  }
}

UserDetailPage.propTypes = {
  fetchUserDetail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userDetail: state.user.userDetail,
});

export default connect(mapStateToProps, { fetchUserDetail })(UserDetailPage);