import React, { Component } from "react";
import Comment from "./Comments";
import toggleOpen from "./../../decorators/toggleOpen";
import CommentsForm from "./CommentsForm";

class CommentsList extends Component {

	getComments() {
		const commentElement = this.props.comments.map((id) =>
			<li key={id}>
				<Comment id={id} />
			</li>
		);
		
		const { isOpen } = this.props;

		if (!isOpen) return null;

		return commentElement;
	}

	render() {
		const { isOpen, toggleOpen } = this.props;
		
		return (
			<div>
				<button className={isOpen ? "btn btn-dark" : "btn btn-info"} onClick={toggleOpen} > {isOpen ? "Закрыть комментарии" : "Открыть комментарии"} </button>
				<CommentsForm />
				<ul>
					{this.getComments()}
				</ul>
			</div>
		);
	}

}

export default toggleOpen(CommentsList);