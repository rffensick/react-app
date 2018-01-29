import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE, LOAD_COMMENT } from './../constants';
import { arrToMap } from "../helpers";
import { OrderedMap, Record } from "immutable";

const articleRecord = Record({
	text: undefined,
	title: '',
	loading: false,
	commentsLoading: false,
	commentsLoaded: false,
	id: undefined,
	comments: []
});

const ReducerState = Record({
	loading: false,
	loaded: false,
	entities: new OrderedMap({})
})

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
	const { type, payload, randomId, response } = action;
	switch (type) {
		
		case DELETE_ARTICLE:
			return articleState.deleteIn(['entities', payload.id]);
		
			case ADD_COMMENT:
				return articleState.updateIn(
					['entities', payload.articleId, 'comments'], comments => 
						comments.concat(randomId));
			
			case LOAD_ALL_ARTICLES + START:
				return articleState.set('loading', true);

			case LOAD_ALL_ARTICLES + SUCCESS:
				return articleState
					.set( 'entities', arrToMap(response, articleRecord))
					.set( 'loading', false )
					.set( 'loaded', true );

			case LOAD_ARTICLE + START:
				return articleState.setIn(['entities', payload.id, 'loading'], true);

			case LOAD_ARTICLE + SUCCESS:
				return articleState.setIn(['entities', payload.id], new articleRecord(payload.response));

			case LOAD_COMMENT + START:
				return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true)

			case LOAD_COMMENT + SUCCESS:
				return articleState
					.setIn(['entities', payload.articleId, 'commentsLoading'], false)
					.setIn(['entities', payload.articleId, 'commentsLoaded'], true)
					

		default:
			return articleState
	}
}
