import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import VideoGamePage from './components/VideoGamePage';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/api/users" component={UserPage}/>
            <Route exact path="/api/videogames" component={VideoGamePage}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
