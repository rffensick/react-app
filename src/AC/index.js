import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION, ADD_COMMENT } from "./../constants";

export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	return {
		type: DELETE_ARTICLE,

		payload: {
			id
		}
	}
}

export function filterArticle(selected) {
	return {
		type: CHANGE_SELECTION,
		
		payload: {
			selected
		}
	}
}

export function addComment(comment, articleId) {
	return {
		type: ADD_COMMENT,
		payload: {comment, articleId},
		generateId: true
	}
}