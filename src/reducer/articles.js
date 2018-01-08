import { articles as defaultArticles } from "./../fixtures";
import { DELETE_ARTICLE, FILTER_ARTICLE } from './../constants';

export default (articleState = defaultArticles, action) => {
  const { type, payload, titleArticle } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter(article => article.id !== payload.id)

    case FILTER_ARTICLE:
      return articleState.filter(article => article.title.toLowerCase().search(titleArticle.toLowerCase()) !== -1)

    default:
      return articleState
  }
}
