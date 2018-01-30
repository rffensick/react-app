import React, { Component, Fragment } from 'react';
import ArticlesRoute from './route/ArticleRoute';
import FilterArticle from "./components/filter";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <ul>
              <li>
                <NavLink activeStyle={{ fontWeight: 'bold' }} to='/articles'>Articles</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ fontWeight: 'bold' }} to='/search'>Search</NavLink>
              </li>
            </ul>
            <Route path='/articles' component={ArticlesRoute} />
            <Route path='/search' component={FilterArticle} />
          </Fragment>
        </Router>
      </div>
    );
  }

}

