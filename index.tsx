import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';

type SquareType = string | null

interface SquareProps {
  value: SquareType,
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={() => props.onClick() }>
      {props.value}
    </button>
  )
}

interface BoardState {
  squares: SquareType[]
}

class Board extends React.Component<any, BoardState> {
  constructor(props) {
    super(props)

    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({squares: squares})
  }

  renderSquare(i: number) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
