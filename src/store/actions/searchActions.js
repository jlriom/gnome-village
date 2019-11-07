import * as types from "./actionTypes";
import * as readApi from "../../api/brastlewark-read-api";
import { operationInProgress, operationDone } from "../actions/appActions";
import { defaultSearchCriteria } from "../state/searchState";

const searchHabitantsSuccess = (list, total, searchCriteria) => ({
	type: types.SEARCH_HABITANTS_SUCCESS,
	list,
	total,
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
		dispatch(operationInProgress());

		const result = await readApi.searchGnomes({ ...searchCriteria });
		dispatch(searchHabitantsSuccess(result.list, result.total, searchCriteria));
	} catch (error) {
		dispatch(searchHabitantsFail(error));
	} finally {
		dispatch(operationDone());
	}
};
