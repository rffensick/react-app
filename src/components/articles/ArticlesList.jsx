import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { filteredArticlesSelector } from "./../../selectors";
import { loadAllArticles } from "../../AC";
import { NavLink } from "react-router-dom";

class ArticlesList extends Component {
	static propTypes = {
		// from connect
		articles: PropTypes.array.isRequired,
		// from accordion
		openItemId: PropTypes.string,
		toggleOpenItem: PropTypes.func
	};

	componentDidMount() {
		const { loaded, loading, loadAllArticles } = this.props;
		if (!loaded && !loading) loadAllArticles();
	}
	

	render() {
		const { articles, loading } = this.props;
		const articleElement = articles.map((article) =>
			<li key={article.id}>
				<NavLink key={article.id} to={`/articles/${article.id}`} activeStyle={{fontWeight: 'bold'}} >
					{article.title}
				</NavLink>
			</li>
		);
		return(
			<ul>
				{loading && <h1>Loading...</h1>}
				{articleElement}
			</ul>
		);
	}

}

export default connect((state) => {
	return {
		articles: filteredArticlesSelector(state),
		loading: state.articles.loading,
		loaded: state.articles.loaded
	}
}, { loadAllArticles })(ArticlesList);