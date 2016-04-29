import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';


class Category extends React.Component {

  constructor() {
    super();
    this.state = {
      category: null
    }
  }

  loadCategory() {
    let id = this.props.params.categoryId;
    jQuery.getJSON(`https://peaceful-cove-33360.herokuapp.com/categories/${id}.json`, (function(data){
      this.setState({
        category: data.category
      });
    }).bind(this));
  }

  componentDidMount() {
    this.loadCategory();
  }

  render() {
    return (
      <div className="category">
        <h1>{this.state.category.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Category;
