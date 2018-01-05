import React, { Component } from 'react';
import ArticlesList from './components/articles/ArticlesList';
import ArticlesChart from './components/articles/ArticlesChart';
import FilterArticle from "./components/filter";
import Counter from "./components/counter";


export default class App extends Component {

  render() {
    return (
      <div>
        <Counter />
        <FilterArticle articles={this.props.articles} />
        <ArticlesList articles={this.props.articles} />
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }

}

