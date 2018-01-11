import { createSelector } from 'reselect';

const articlesGetter = state => state.articles;
const filterArticlesGetter = state => state.filterArticles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(articlesGetter, filterArticlesGetter, (articles, filterArticles) => {

	console.log('render filter');

	const {selected} = filterArticles;

	if (!selected.length) {
		return {articles}
	} else {
		
		const filteredArticles = articles.filter(function(article){
			return selected.includes(article.id);
		});

		return {articles: filteredArticles}
	}

});

export const commentSelector = createSelector(commentsGetter, idGetter, (comments, id) => {
	return comments.find(comment => comment.id === id);
});