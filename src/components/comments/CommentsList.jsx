import React, { Component } from "react";
import Comment from "./Comments";
import toggleOpen from "./../../decorators/toggleOpen";
import CommentsForm from "./CommentsForm";

class CommentsList extends Component {

	getComments() {

		const { article: { comments, id }, isOpen } = this.props;

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

export default toggleOpen(CommentsList);