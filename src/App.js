import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Movie from './components/Movie';
import Movies from './components/Movies';
import PageNotFound from './components/PageNotFound';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Movies app example</h2>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </div>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies} />
              <Route path="/movies/:movieId" component={Movie} />
              <Route component={PageNotFound} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
