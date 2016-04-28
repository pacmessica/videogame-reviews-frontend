import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div class="game">
        <h1>Game!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Game;
