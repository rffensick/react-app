import React, { Component } from 'react';
import CommentsPagination from "../components/comments/CommentsPagination";
import { Redirect, Route } from "react-router-dom";

class CommentsPage extends Component {

	getPagination = ({match}) => {
		return <CommentsPagination page={match.params.page} />
	}

	render() {
		const {match} = this.props;
		if (match.isExact) return <Redirect to='/comments/1' />
		return <Route path='/comments/:page' render={this.getPagination} />;
	}
}

export default CommentsPage;