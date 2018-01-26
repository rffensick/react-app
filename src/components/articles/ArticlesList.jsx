import React, { Component } from "react";
import Articles from "./Articles";
import PropTypes from "prop-types";
import accordion from "./../../decorators/accordion";
import { connect } from 'react-redux';
import { filteredArticlesSelector } from "./../../selectors";
import { loadAllArticles  } from "../../AC/index";

class ArticlesList extends Component {
	static propTypes = {
		// from connect
		articles: PropTypes.array.isRequired,
		// from accordion
		openItemId: PropTypes.string,
		toggleOpenItem: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.loadAllArticles()
	}
	

	render() {
		console.log('render articleList');
		const { openItemId, articles, toggleOpenItem } = this.props;
		const articleElement = articles.map((article) =>
			<li key={article.id}>
				<Articles article={article} isOpen={article.id === openItemId} toggleOpen={toggleOpenItem(article.id)} />
			</li>
		);

		return(
			<ul>
				{articleElement}
			</ul>
		);
	}

}

export default connect((state) => {

	return filteredArticlesSelector(state)

}, {loadAllArticles})(accordion(ArticlesList));