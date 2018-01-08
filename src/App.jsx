import React, { Component } from 'react';
import ArticlesList from './components/articles/ArticlesList';
import FilterArticle from "./components/filter";
import Counter from "./components/counter";

export default class App extends Component {

  render() {
    return (
      <div>
        <Counter />
        <FilterArticle articles={[]} />
        <ArticlesList  />
      </div>
    );
  }

}

