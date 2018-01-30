import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentList from './../comments/CommentsList';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'
import { deleteArticle, loadArticle } from "./../../AC";

class Articles extends Component {

	state = {
		updateIndex: 0,
	}

	componentDidMount() {
		const { article, id, loadArticle } = this.props;
		if (!article || (!article.text && !article.loading)) loadArticle(id);
	}
	

	static propTypes = {
		id: PropTypes.string.isRequired,
		//form connect
		article: PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			text: PropTypes.string
		}),
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	getArticle() {
		if (!this.props.isOpen) return null;
		const {article} = this.props;

		return(
			<div>
				{this.props.article.loading && <h1>Loading...</h1>}
				<section className="article-text" > -- {article.text} </section>
				<CommentList article = {article} key={this.state.updateIndex} />
			</div>
		);
	}

	
	handleDelete = () => {
		const { deleteArticle, article } = this.props;
		deleteArticle(article.id)
		console.log('delete');
	}

	render() {
		const { article, isOpen, toggleOpen } = this.props;
		if (!article) return null;
		return (
			<div className='jumbotron' ref={this.setContainerRef} >
				<h3> Title:  {article.title} </h3>
				<div className="btn-group">
					<button className={isOpen ? 'btn btn-danger' : 'btn btn-primary'} onClick={toggleOpen} > {isOpen ? 'Закрыть статью' : 'Открыть статью'} </button>
					<button onClick={this.handleDelete} className='btn btn-warning' >Удалить статью</button>
				</div>
				<CSSTransitionGroup transitionName="article" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
					{this.getArticle()}
				</CSSTransitionGroup>
			</div>
		);
	}

}


export default connect((state, ownProps) => ({
	article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Articles);