import React, { Component } from "react";
import toggleOpen from "./../../decorators/toggleOpen";

class Comment extends Component {

	render() {
		const { comment } = this.props;
		return (
			<div>		
				<section className="comments-text">
					<h4> User: {comment.user} </h4>
					-- {comment.text}
					<p className="end-comment">End Comment ;)</p>
				</section>
			</div>
		);
		
	}

}

export default toggleOpen(Comment);