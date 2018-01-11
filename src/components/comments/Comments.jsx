import React, { Component } from "react";
import toggleOpen from "./../../decorators/toggleOpen";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { commentSelectorFactory } from './../../selectors'

class Comment extends Component {

	// static propTypes = {
	// 	id: PropTypes.string.isRequired,
	// 	// form connect
	// 	comment: PropTypes.shape({
	// 		text: PropTypes.string.isRequired,
	// 		user: PropTypes.string.isRequired,
	// 	}).isRequired
	// }

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

const mapStateToProps = () => {

	const commentSelector = commentSelectorFactory()

	return (state, ownProps) => {
		return {
			comment: commentSelector(state, ownProps)
		}
	}
}

export default connect(mapStateToProps)(toggleOpen(Comment));