import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const NUM_BOXES = 32


const Box = ({color}) => {
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color
  }

  return <div style={style}/>
}

class App extends Component {

  constructor (props) {
    super(props)
    const colors = Array(NUM_BOXES).fill().map(this.getRandomColor, this)
    this.state = {
      colors
    }

    setInterval(() => {
      const colors = [...this.state.colors]
      const index = Math.floor(Math.random() * NUM_BOXES)
      colors[index] = this.getRandomColor()
      this.setState({colors})
    }, 300)
  }

  getRandomColor () {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length)
    return this.props.allColors[colorIndex]
  }

  render() {
    const boxes = this.state.colors.map((color, index) => (
      <Box key={index} color={color}/>
    ))
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}


App.defaultProps = {
  allColors: ['Aquamarine', 'Black ', 'BlueViolet', 'Chocolate', 'Crimson', 'DarkGoldenRod', 'DarkSalmon',
              'DeepPink', 'ForestGreen', 'Gold', 'Green', 'GreenYellow', 'HotPink', 'PaleGoldenRod', 'SeaShell',
              'Teal', 'Tomato', 'YellowGreen', 'SlateBlue', 'SaddleBrown']
}

export default App



