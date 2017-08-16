import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route path="/about" render={() => <h1>about</h1>} /> */}
          <Route
            path="/about"
            children={({ match }) => match && <h1>About</h1>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
