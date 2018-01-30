import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticlesList from '../components/articles/ArticlesList';
import Articles from "../components/articles/Articles";
import { Route } from 'react-router-dom';

export default class ArticlesRoute extends Component {
	static propTypes = {
		
	}

	getArticle = ({match}) => {
		const { id } = match.params;
		return <Articles key={id} isOpen id={id} />;
	}

	getIndex = () => {
		return <h2>Select please Article</h2>;
	}

	render() {
		return (
			<div>
				<ArticlesList />
				<Route path="/articles/:id" render={this.getArticle} />
				<Route path="/articles" exact render={this.getIndex} />
			</div>
		)
	}
}
