import * as types from "./actionTypes";
import PropTypes from "prop-types";
import * as readApi from "../../api/brastlewarkReadApi";
import {
	operationInProgress,
	operationDone,
	showError
} from "../actions/appActions";
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

searchHabitantsFail.propTypes = {
	type: PropTypes.object.isRequired
};

export const searchHabitants = (
	searchCriteria = defaultSearchCriteria
) => async dispatch => {
	try {
		dispatch(operationInProgress());

		const result = await readApi.searchGnomes({ ...searchCriteria });
		dispatch(searchHabitantsSuccess(result.list, result.total, searchCriteria));
	} catch (error) {
		dispatch(searchHabitantsFail(error));
		dispatch(showError("Search", error));
	} finally {
		dispatch(operationDone());
	}
};

searchHabitants.propTypes = {
	searchCriteria: PropTypes.object.isRequired
};
