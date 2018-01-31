import React, { Component } from 'react';
import CommentsPagination from "../components/comments/CommentsPagination";

class CommentsPage extends Component {
	render() {
		const {match} = this.props;
		return <CommentsPagination page={match.params.page} />;
	}
}

export default CommentsPage;