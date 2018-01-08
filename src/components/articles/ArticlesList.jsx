import React, { Component } from "react";
import Articles from "./Articles";
import PropTypes from "prop-types";
import accordion from "./../../decorators/accordion";

class ArticlesList extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired,
		// from accordion
		openItemId: PropTypes.string,
		toggleOpenItem: PropTypes.func.isRequired
	}

	render() {
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

export default accordion(ArticlesList);