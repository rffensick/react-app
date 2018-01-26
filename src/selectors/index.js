import { createSelector } from 'reselect';
import { mapToArr } from "./../helpers";

const articlesGetter = state => state.articles.entities;
const filterArticlesGetter = state => state.filterArticles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(articlesGetter, filterArticlesGetter, (articles, filterArticles) => {

	const {selected} = filterArticles;

	if (!selected.length) {
		return mapToArr(articles)
	} else {
		
		const filteredArticles = mapToArr(articles).filter(function(article){
			return selected.includes(article.id);
		});

		return filteredArticles
	}

});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
	return comments[id];
});