import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import React, { Component } from 'react';
import Char from './Components/Char';

class App extends Component {
  state = {userInput: ''}

  countHandler = (event) => {
    this.setState({userInput: event.target.value})
  };

  removeHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);

    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
      character={ch}
      key={index}
      clicked={() => this.removeHandler(index)}/>
    })

    return(
      <div className="App">
      <input type="text" 
      onChange={this.countHandler} 
      value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <ValidationComponent inputLength={this.state.userInput.length} />
      {charList}
    </div>
    )
  }
}



export default App;
