import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    let component = this;
    let id = this.props.params.categoryId
    let url = `https://peaceful-cove-33360.herokuapp.com/categories/${id}/games.json`;
    jQuery.getJSON(url, function(data) {
      component.setState({
        games: data.games
      });
    });
  }

  render() {
    let id = this.props.params.categoryId

    return (
      <div className="games">
        <h1>Games!</h1>
        <ul>
          {this.state.games.map(function(game) {
            return(
              <li key={game.id}>
                <Link to={`categories/${id}/games/${game.id}`}>{game.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Games;
