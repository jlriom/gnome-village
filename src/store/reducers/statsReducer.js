import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const statsReducer = (state = initialState.stats, action) => {
	switch (action.type) {
		case types.STATS_HAB_BY_HAIRCOLOR_SUCCESS:
			return {
				...state,
				habitantsByHairColor: action.habitantsByHairColor
			};
		case types.STATS_HAB_BY_HAIRCOLOR_FAIL:
			return {
				...state,
				habitantsByHairColor: [],
				error: action.error
			};
		case types.STATS_HAB_BY_PROF_SUCCESS:
			return {
				...state,
				habitantsByProfession: action.habitantsByProfession
			};
		case types.STATS_HAB_BY_PROF_FAIL:
			return {
				...state,
				habitantsByProfession: [],
				error: action.error
			};
		default:
			return state;
	}
};

export default statsReducer;
