import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const Links = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
    </div>  
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [0,1,2,3,4,5,6,7,9]
    };
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" render={() => <h1>about</h1>} /> */}
            <Route
              path="/about"
              children={({ match }) => match && <h1>About</h1>}
            />
            {this.state.numbers.map(number => {
              return (<p key={number}>{number}</p>)
            })}
            <Links />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
