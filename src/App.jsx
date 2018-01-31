import React, { Component, Fragment } from "react";
import ArticlesRoute from "./route/ArticleRoute";
import FilterArticle from "./components/filter";
import AddArticle from "./route/AddArticle";
import CommentsPage from "./route/CommentsPage";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <ul>
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to='/articles/'>Articles</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to='/articles/new/'>New Article</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to='/search'>Search</NavLink>
                </li>
            </ul>
            <Switch>
              <Route path='/articles/new/' component={AddArticle} />
              <Route path='/articles/' component={ArticlesRoute} />
              <Route path='/search' component={FilterArticle} />
              <Route path='/comments/:page' component={CommentsPage} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }

}

