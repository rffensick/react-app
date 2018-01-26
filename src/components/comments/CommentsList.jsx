import React, { Component } from "react";
import Comment from "./Comments";
import toggleOpen from "./../../decorators/toggleOpen";
import CommentsForm from "./CommentsForm";
import { connect } from "react-redux";
import { loadArticleComments } from "../../AC";

class CommentsList extends Component {

	componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
		if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
			loadArticleComments(article.id)
		}
	}

	getComments() {

		const { article: { comments, id, commentsLoading, commentsLoaded }, isOpen } = this.props;

		if (!comments.length) {
			return (
				<li className='end-comment' key={id} >
					No comments yet!
				</li>
			);
		}

		const commentElement = comments.map((id) =>
			<li key={id}>
				<Comment id={id} />
			</li>
		);

		if (!isOpen) return null;

		if (commentsLoading) return <h1>Loading...</h1>;
		if (!commentsLoaded) return null;
		return commentElement;
	}

	render() {
		const { isOpen, toggleOpen } = this.props;
		const { article: {id} } = this.props;
		return (
			<div>
				<button className={isOpen ? "btn btn-dark" : "btn btn-info"} onClick={toggleOpen} > {isOpen ? "Закрыть комментарии" : "Открыть комментарии"} </button>
				<CommentsForm articleId = {id} />
				<ul>
					{this.getComments()}
				</ul>
			</div>
		);
	}

}

export default connect(null, { loadArticleComments })(toggleOpen(CommentsList));