import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberTxt from './Components/NumberTxt';
import Line from './Components/Line';

class App extends Component {
  state = {
    number : this.props.number, 
    numberArray : new Array(this.props.number).fill(0)
  };

  alertButtonClick = () => {
    // alert("now you know how to handle onclick event");
    let newNumber = this.props.onClickAddTwo(this.state.number);
    this.setState({
      number : newNumber, numberArray : new Array(newNumber).fill(0)
    });
    console.log(this.state.numberArray);
    // this.renderLine();
  }

  renderLine = () => {
    this.state.numberArray.map(() => 
      <Line />
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.alertButtonClick}>Hello World!</button>
        <span><NumberTxt /> {this.state.number}</span>
        {/* <div>{this.renderLine}</div> */}
        <div>
            {this.state.numberArray.map(() => <Line />)}
        </div>
      </div>
    );
  }
}

export default App;
