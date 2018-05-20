import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {Provider} from 'react-redux';


import store from './store';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import QuizSolvePage from './pages/QuizSolvePage';
import UserDetailPage from './pages/UserDetailPage';
import RecommendFormPage from './pages/RecommendFormPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <main>
            <Navigation/>
            <div style={{ marginTop: '3rem' }}>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/quiz-solve/:id" component={QuizSolvePage} />
              <Route exact path="/user-detail/:id" component={UserDetailPage} />
              <Route exact path="/recommend" component={RecommendFormPage} />
            </div>
          </main>
        </Router>
      </Provider>
    );
  }
}

export default App;