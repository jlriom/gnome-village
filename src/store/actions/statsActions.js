import * as types from "./actionTypes";
import PropTypes from "prop-types";
import * as readApi from "../../api/brastlewarkReadApi";
import {
	operationInProgress,
	operationDone,
	showError
} from "../actions/appActions";

const loadHabitantsByHairColorSuccess = habitantsByHairColor => ({
	type: types.STATS_HAB_BY_HAIRCOLOR_SUCCESS,
	habitantsByHairColor
});

loadHabitantsByHairColorSuccess.propTypes = {
	habitantsByHairColor: PropTypes.array.isRequired
};

const loadHabitantsByHairColorFail = error => ({
	type: types.STATS_HAB_BY_HAIRCOLOR_SUCCESS,
	error
});

loadHabitantsByHairColorFail.propTypes = {
	error: PropTypes.object.isRequired
};

export const loadHabitantsByHairColor = () => async dispatch => {
	try {
		dispatch(operationInProgress());

		const result = await readApi.getHairColors();
		dispatch(loadHabitantsByHairColorSuccess(result));
	} catch (error) {
		dispatch(loadHabitantsByHairColorFail(error));
		dispatch(showError("Loading stats", error));
	} finally {
		dispatch(operationDone());
	}
};

const loadHabitantsByProfessionSuccess = habitantsByProfession => ({
	type: types.STATS_HAB_BY_PROF_SUCCESS,
	habitantsByProfession
});

loadHabitantsByProfessionSuccess.propTypes = {
	habitantsByProfession: PropTypes.array.isRequired
};

const loadHabitantsByProfessionFail = error => ({
	type: types.STATS_HAB_BY_PROF_FAIL,
	error
});

loadHabitantsByProfessionFail.propTypes = {
	error: PropTypes.object.isRequired
};

export const loadHabitantsByProfession = () => async dispatch => {
	try {
		dispatch(operationInProgress());

		const result = await readApi.getProfessions();
		dispatch(loadHabitantsByProfessionSuccess(result));
	} catch (error) {
		dispatch(loadHabitantsByProfessionFail(error));
		dispatch(showError("Loading stats", error));
	} finally {
		dispatch(operationDone());
	}
};
