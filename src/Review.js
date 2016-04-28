import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Review extends React.Component {
  render() {
    return (
      <div className="review">
        <h1>Review!</h1>
        <p>ID: {this.props.params.reviewId}</p>
        <p>hihihi page</p>
        {this.props.children}
      </div>
    );
  }
}

export default Review;
