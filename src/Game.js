import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div class="game">
        <h1>Game!</h1>
        <p>ID: {this.props.params.gameId}</p>
        <p>title: </p>

        {this.props.children}
      </div>
    );
  }
}

export default Game;
