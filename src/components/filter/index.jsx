import React, {Component} from 'react';
import Select from "react-select";
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

class FilterArticle extends Component {

  state = {
    selection: null
  }

  changeSelection = selection => this.setState({ selection });

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id
    }));
    return(
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
    );
  }

}


export default connect(state => ({
  articles: state.articles
}))(FilterArticle);