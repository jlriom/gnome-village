import * as types from "./actionTypes";
import * as readApi from "../../api/brastlewark-read-api";
import { defaultSearchCriteria } from "../state/searchState";

const searchHabitantsSuccess = (result, searchCriteria) => ({
	type: types.SEARCH_HABITANTS_SUCCESS,
	list: result.list,
	total: result.total,
	searchCriteria
});

const searchHabitantsFail = error => ({
	type: types.SEARCH_HABITANTS_FAIL,
	error
});

export const searchHabitants = (
	searchCriteria = defaultSearchCriteria
) => async dispatch => {
	try {
		const result = await readApi.searchGnomes({ ...searchCriteria });
		console.log("result", result);
		dispatch(searchHabitantsSuccess(result, searchCriteria));
	} catch (error) {
		dispatch(searchHabitantsFail(error));
	} finally {
	}
};
