import { INCREMENT, DELETE_ARTICLE, CHANGE_SELECTION, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_COMMENT } from "./../constants";

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

export function loadAllArticles() {
	return {
		type: LOAD_ALL_ARTICLES,
		callAPI: '/api/article'
	}
}

export function loadArticle(id) {
	return dispatch => {
		dispatch({
			type: LOAD_ARTICLE + START,
			payload: { id }
		})

		fetch(`/api/article/${id}`)
			.then(res => res.json())
			.then(response => dispatch({
				type: LOAD_ARTICLE + SUCCESS,
				payload: { id, response }
			}))
			.catch(err => dispatch({
				type: LOAD_ARTICLE + FAIL,
				payload: { id, err }
			}))
	}
}

// export function loadArticleComments(articleId) {
// 	return {
// 		type: LOAD_COMMENT,
// 		payload: { articleId },
// 		callApi: `/api/comment?article=${articleId}`
// 	}
// }

export function loadArticleComments(articleId) {
	return {
		type: LOAD_COMMENT,
		payload: { articleId },
		callAPI: `/api/comment?article=${articleId}`
	}
}