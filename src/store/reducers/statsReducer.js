import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { noError, createError } from "../state/errorState";

const statsReducer = (action, state = initialState.stats) => {
	switch (action.type) {
		case types.STATS_HAB_BY_HAIRCOLOR_SUCCESS:
			return {
				...state,
				habitantsByHairColor: action.habitantsByHairColor,
				error: noError
			};
		case types.STATS_HAB_BY_HAIRCOLOR_FAIL:
			return {
				...state,
				habitantsByHairColor: [],
				error: createError(action.type, action.error)
			};
		case types.STATS_HAB_BY_PROF_SUCCESS:
			return {
				...state,
				habitantsByProfession: action.habitantsByProfession,
				error: noError
			};
		case types.STATS_HAB_BY_PROF_FAIL:
			return {
				...state,
				habitantsByProfession: [],
				error: createError(action.type, action.error)
			};
		default:
			return state;
	}
};

export default statsReducer;
