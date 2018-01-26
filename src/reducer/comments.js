import { arrToMap } from "./../helpers";
import { ADD_COMMENT, LOAD_COMMENT, SUCCESS } from "../constants";
import { OrderedMap, Record } from "immutable";

const commentRecord = Record({
	id: null,
	user: null,
	text: null
});

const ReducerState = Record({
	entities: new OrderedMap({})
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
		
		default:
			return commentsState
	}
}
