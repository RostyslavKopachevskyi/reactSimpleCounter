import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNum: 0
    }
    this.maxNum = 10
    this.minNum = -10
    this.defaultNum = 0
  }

  increaseNum = () => {
    if(this.state.currentNum < this.maxNum) {
      this.setState(state => ({
        currentNum: state.currentNum + 1
      }))
    }
  }

  decreaseNum = () => {
    if(this.state.currentNum > this.minNum) {
      this.setState(state => ({
        currentNum: state.currentNum - 1
      }))
    }
  }

  randomNum = () => {
    let random = Math.floor(Math.random() * (this.maxNum - this.minNum + 1)) + this.minNum;
    this.setState({
      currentNum: random
    })
  }

  resetNum = () => {
    this.setState({
      currentNum: this.defaultNum
    })
  }

  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.currentNum}</div>
        <div class="controls">
          <button onClick={this.increaseNum}>INC</button>
          <button onClick={this.decreaseNum}>DEC</button>
          <button onClick={this.randomNum}>RND</button>
          <button onClick={this.resetNum}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;