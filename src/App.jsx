import React, { Component } from 'react';
import ArticlesList from './components/articles/ArticlesList';
import FilterArticle from "./components/filter";

export default class App extends Component {

  render() {
    return (
      <div>
        <FilterArticle articles={[]} />
        <ArticlesList />
      </div>
    );
  }

}

