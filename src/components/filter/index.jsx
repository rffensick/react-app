import React, {Component} from 'react';
import Select from "react-select";
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { filterArticle } from "./../../AC";

class FilterArticle extends Component {

  handleChange = selectedOption => this.props.filterArticle(selectedOption.map(option=>option.value))

  render() {
    const {selected, articles} = this.props;
    const options = articles.map(article => ({
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
          value={selected}
          onChange={this.handleChange}
        />
      </div>
    );
  }

}


export default connect(state => ({
  articles: state.articles,
  selected: state.filterArticles.selected
}), { filterArticle })(FilterArticle);