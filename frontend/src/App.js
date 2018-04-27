import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';


import store from './store';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import QuizSolvePage from './pages/QuizSolvePage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Navigation/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/quiz-solve/:id" component={QuizSolvePage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;