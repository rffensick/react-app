import { arrToMap } from "./../helpers";
import { ADD_COMMENT, LOAD_COMMENT, SUCCESS, LOAD_COMMENTS_FOR_PAGE, START } from "../constants";
import { OrderedMap, Record, Map } from "immutable";

const commentRecord = Record({
	id: null,
	user: null,
	text: null
});

const ReducerState = Record({
	entities: new OrderedMap({}),
	pagination: new Map({}),
	total: null
})

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
	const { type, payload, randomId, response } = action;

	switch (type) {

		case ADD_COMMENT:
			return commentsState.setIn(
				['entities', randomId], new commentRecord({...payload.comment, id: randomId})
			);

		case LOAD_COMMENT + SUCCESS:
			return commentsState.update('entities', entities => entities.merge(arrToMap(response, commentRecord)));
		
		case LOAD_COMMENTS_FOR_PAGE + START:
			return commentsState.setIn(['pagination', payload.page, 'loading'], true);

		case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
			return commentsState
				.set('total', response.total)
				.mergeIn(['entities'], arrToMap(response.records, commentRecord))
				.setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
				.setIn(['pagination', payload.page, 'loading'], false);
		
		default:
			return commentsState
	}
}
