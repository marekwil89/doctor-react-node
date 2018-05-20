import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuizList } from '../../actions/quizActions';
import { Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchQuizList({solved: true});
  }

  onChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();

    const filers = {
      recommend: this.state.recommend,
      solved: true,
    }

    this.props.fetchQuizList(filers);
  }

  render() {
    return (
      <Card style={{ marginBottom: '1rem' }}>
        <CardBody>
          <Form onSubmit={this.onSubmit}>
            <h3>Filtrowanie:</h3>
              <FormGroup check>
                <Label check>
                  <Input 
                    type="checkbox" 
                    name="recommend"
                    checked={this.state.recommend}
                    onChange={this.onChange} 
                    value={this.state.email} 
                    id="field-recommend"
                  />{' '}
                  Rekomedowane?
                </Label>
              </FormGroup>
              <div className="clearfix">
                <Button outline color="danger" className="float-right" style={{ marginTop: '1rem' }} type="submit">Filtrowanie</Button>
              </div>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

FilterForm.propTypes = {
  fetchQuizList: PropTypes.func.isRequired,
  // loginUser: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   // errors: state.auth.errors.errors
// });

export default connect(null, { fetchQuizList })(FilterForm);