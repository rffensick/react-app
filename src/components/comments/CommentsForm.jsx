import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from "./../../AC";
import { Form, FormField, Button, Icon, Label } from "semantic-ui-react";

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
		data: {
			user: '',
			text: ''
		},
		errors: {}
	}

	handleSubmit = e => {
		e.preventDefault();

		const errors = this.validate(this.state.data);

		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			this.props.addComment(this.state.data)
			this.setState({
				data: {
					user: '',
					text: ''
				}
			});			
		}

	}

	validate = data => {
		const error = {};

		if (data.user.length < limits.user.min) {
			error.user = `Имя может содержать не менее ${limits.user.min} символов`;
		} else if (data.user.length > limits.user.max) {
			error.user = `Имя может содержать не больше ${limits.user.max} символов`;
		}

		if (data.text.length < limits.text.min) {
			error.text = `Поле может содержать не менее ${limits.text.min} символов`;
		} else if (data.text.length > limits.text.max) {
			error.text = `Поле может содержать не больше ${limits.text.max} символов`;
		}

		return error;
	}

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({
			data: {
				...this.state.data,
				[name]: value
			}
		});
	}

	render() {
		const { data, errors } = this.state;
		return(
			<Form onSubmit={this.handleSubmit} >

				<FormField error={!!errors.user} >
					<label htmlFor="user">User: </label>
					{errors.user && <Label basic color="red" pointing="below" > {errors.user} </Label>}
					<input type="text" name="user" value={data.user} onChange={this.handleChange} />
				</FormField>

				<FormField error={!!errors.text} >
					<label htmlFor="text">Comment: </label>
					{errors.text && <Label basic color="red" pointing="below" > {errors.text} </Label>}
					<textarea row="4" type="text" name="text" value={data.text} onChange={this.handleChange} />
				</FormField>

				<Button primary animated>
					<Button.Content visible>Добавить коментарий</Button.Content>
					<Button.Content hidden>
						<Icon name='comment' />
					</Button.Content>
				</Button>

			</Form>
		);
	}

}


export default connect(null, (dispatch, ownProps) => ({
	addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentsForm);