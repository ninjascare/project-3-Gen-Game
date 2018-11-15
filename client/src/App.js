import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
