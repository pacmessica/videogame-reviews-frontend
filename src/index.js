import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Categories from './Categories';
import Category from './Category';
import Games from './Games';
import Game from './Game';
import Review from './Review';
import Reviews from './Review';
import PageNotFound from './PageNotFound';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Categories} />
      <Route path ="categories/:categoryId" component={Category}>
        <IndexRoute component={Games} />
        <Route path="games/:gameId" component={Game}>
          <IndexRoute component={Reviews} />
          <Route path="reviews/:reviewId" component={Review}/>
        </Route>
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
