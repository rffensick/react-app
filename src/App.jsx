import React, { Component } from 'react';
import ArticlesList from './components/articles/ArticlesList';
import ArticlesChart from './components/articles/ArticlesChart';
import Select from "react-select";
import 'react-select/dist/react-select.css';



export default class App extends Component {

  state = {
    selection: null
  }

  changeSelection = selection => this.setState({ selection });

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id 
    }));
    return (
      <div>
        <div className="search">
          <label>Поиск</label>
          <Select 
            placeholder="Поиск по статьям" 
            multi 
            options={options} 
            value={this.state.selection} 
            onChange={this.changeSelection} 
          /> 
        </div>
        <ArticlesList articles={this.props.articles} />
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }

}

