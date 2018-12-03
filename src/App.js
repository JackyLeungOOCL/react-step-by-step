import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number : 1};

  alertButtonClick = () => {
    alert("now you know how to handle onclick event");
    this.setState({number : 1});
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.props.number}>Hello World!</button>
        <span>number: {this.props.number}</span>
      </div>
    );
  }
}

export default App;
