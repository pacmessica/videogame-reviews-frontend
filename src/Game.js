import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      game: null
    }
  }

  loadGame() {
    let id = this.props.params.gameId;
    let id2=this.props.params.categoryId;
    jQuery.getJSON(`https://peaceful-cove-33360.herokuapp.com/categories/${id2}/games/${id}.json`, (function(data){
      this.setState({
        game: data.game



      });
    }).bind(this));
  }

  componentDidMount() {
    this.loadGame();
  }



  render() {
    return (
      <div class="game">
        <h1>{this.state.game.title}</h1>
        

        {this.props.children}
      </div>
    );
  }
}

export default Game;
