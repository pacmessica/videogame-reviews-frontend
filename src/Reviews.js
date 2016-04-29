import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    let component = this;
    catId = this.props.params.categoryId;
    gameId = this.props.params.gameId;
    let url = `https://peaceful-cove-33360.herokuapp.com/categories/${catId}/games/${gameId}/reviews.json`;
    jQuery.getJSON(url, function(data) {
      component.setState({
        reviews: data.reviews
      });
    });
  }


  render() {
    return (
      <div className="Reviews">
        <h1>Reviews!</h1>
        <ul>
          {this.state.reviews.map(function(review) {
            return(
              <li key={review.id}>
                <Link to={`/reviews/${review.id}`}>{review.content}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Reviews;
