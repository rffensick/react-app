import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { checkAndLoadCommentsForPage } from "../../AC";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";

class CommentsPagination extends Component {

	componentWillMount = () => {
		this.props.checkAndLoadCommentsForPage(this.props.page);
	}
	
	componentWillReceiveProps = ({page, checkAndLoadCommentsForPage}) => {
		checkAndLoadCommentsForPage(page);
	}
	
	getCommentItem = () => {
		const {comments, loading} = this.props;
		if (loading || !comments) return;
		const commentItems = comments.map(id => <li key={id} > <Comments id={id} /></li>)
		return <ul>{commentItems}</ul>
	}
	
	getPaginator = () => {
		const {total} = this.props;
		const items = [];
		for (let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
			items.push( <li key={i} ><NavLink to={`/comments/${i}`} activeStyle={{fontWeight: 'bold'}} >{i}</NavLink> </li> )
		}

		return <ul>{items}</ul>;
	}

	render() {
		const { total } = this.props;
		return (
			<Fragment>
				{!total && <h1>Loading...</h1>}
				{this.getCommentItem()}
				{this.getPaginator()}
			</Fragment>
		);
	}
}

export default connect((state, {page}) => {
	const { total, pagination } = state.comments;
	return {
		total,
		loading: pagination.getIn([page, 'loading']),
		comments: pagination.getIn([page, 'ids'])
	}
}, { checkAndLoadCommentsForPage })(CommentsPagination);