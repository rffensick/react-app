import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from './../comments/CommentsList';
import { CSSTransitionGroup } from 'react-transition-group';

class Articles extends Component {

	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	getArticle() {
		if (!this.props.isOpen) return null;
		const {article} = this.props;

		if (!article.comments) return (
			<div>
				<section> {article.text} </section>
					<ul>
						<li className="end-comment">No comments yet!</li>
					</ul>
			</div>
		);

		return(
			<div>
				<section className="article-text" > -- {article.text} </section>
				<CommentList comments = {article.comments} />
			</div>
		);
	}

	setContainerRef = ref => {
		this.container = ref;
		console.log("---", ref);
	}
	
	render() {
		const { article, isOpen, toggleOpen } = this.props;
		console.log("update article");
		return (
			<div className='jumbotron' ref={this.setContainerRef} >
				<h3> Title:  {article.title} </h3>
				<button className={isOpen ? 'btn btn-danger' : 'btn btn-primary'} onClick={toggleOpen} > {isOpen ? 'Закрыть статью' : 'Открыть статью'} </button>
				<CSSTransitionGroup transitionName="article" transitionEnterTimeout={300} transitionLeaveTimeout={500}>
					{this.getArticle()}
				</CSSTransitionGroup>
			</div>
		);
	}

}

export default Articles;