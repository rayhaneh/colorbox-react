import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  getRandomColor () {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length)
    return this.props.allColors[colorIndex]
  }

  render() {
    return (
      <div className="App">
        here
      </div>
    );
  }
}


App.defaultProps = {
  allColors: ['Aquamarine', 'Black ', 'BlueViolet', 'Chocolate', 'Crimson', 'DarkGoldenRod', 'DarkSalmon',
              'DeepPink', 'ForestGreen', 'Gold', 'Green', 'GreenYellow', 'HotPink', 'PaleGoldenRod', 'SeaShell'
              'Teal', 'Tomato', 'YellowGreen', 'SlateBlue', 'SaddleBrown']
}

export default App



