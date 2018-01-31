import React, { Component, Fragment } from "react";
import ArticlesRoute from "./route/ArticleRoute";
import FilterArticle from "./components/filter";
import AddArticle from "./route/AddArticle";
import CommentsPage from "./route/CommentsPage";
import { Route, NavLink, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import history from "./history";

export default class App extends Component {

  render() {
    return (
      <div>
        <ConnectedRouter history={history} >
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
                <li>
                  <NavLink activeStyle={{ fontWeight: 'bold' }} to='/comments'>All Comments</NavLink>
                </li>
            </ul>
            <Switch>
              <Route path='/articles/new/' component={AddArticle} />
              <Route path='/articles/' component={ArticlesRoute} />
              <Route path='/search' component={FilterArticle} />
              <Route path='/comments' component={CommentsPage} />
            </Switch>
          </Fragment>
        </ConnectedRouter>
      </div>
    );
  }

}

