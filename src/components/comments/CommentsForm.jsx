import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from "./../../AC";

const limits = {
	user: {
		min: 5,
		max: 15
	},
	text: {
		min: 10,
		max: 300
	}
}

class CommentsForm extends Component {

	state = {
		user: '',
		text: ''
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.addComment(this.state)
		this.setState({
			user: '',
			text: ''
		});
	}

	getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'form-data__error form-control' : 'form-control';

	handleChange = type => e => {
		const {value} = e.target;
		if (value.length > limits[type].max) {
			return;
		}

		this.setState({
			[type]: value
		});
	}

	render() {
		return(
			<form className="comment-form" onSubmit={this.handleSubmit} >
				<div className="input-wrapper" >
					<label htmlFor="user-input">User :</label>
					<input type="text"
						name="user-input" 
						value={this.state.user}
						onChange={this.handleChange('user')}
						className={this.getClassName('user')} 
						/>
				</div>
				<div className="input-wrapper" >
					<label htmlFor="comment-input">Comment :</label>
					<textarea
						rows="4" 
						type="text"
						name="comment-input" 
						value={this.state.text}
						onChange={this.handleChange('text')}
						className={this.getClassName('text')}
						/>
				</div>
				<button className="btn btn-success" >Добавить коментарий</button>
			</form >
		);
	}

}


export default connect(null, (dispatch, ownProps) => ({
	addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentsForm);