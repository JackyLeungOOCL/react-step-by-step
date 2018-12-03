import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberTxt from './NumberTxt';

class App extends Component {
  state = {number : this.props.number};

  alertButtonClick = () => {
    // alert("now you know how to handle onclick event");
    let newNumber = this.props.onClickAddTwo(this.state.number);
    this.setState({number : newNumber});
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.alertButtonClick}>Hello World!</button>
        <span><NumberTxt /> {this.state.number}</span>
      </div>
    );
  }
}

export default App;
