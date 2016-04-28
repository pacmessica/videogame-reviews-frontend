import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h1>Reviews!</h1>

        {this.props.children}
      </div>
    );
  }
}

export default Reviews;
