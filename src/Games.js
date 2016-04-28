import React from 'react';

class Games extends React.Component {
  render() {
    return (
      <div class="games">
        <h1>Games!</h1>

        {this.props.children}
      </div>
    );
  }
}

export default Games;
