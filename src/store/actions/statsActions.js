import * as types from "./actionTypes";
import * as readApi from "../../api/brastlewark-read-api";

const loadHabitantsByHairColorSuccess = habitantsByHairColor => ({
	type: types.STATS_HAB_BY_HAIRCOLOR_SUCCESS,
	habitantsByHairColor
});

const loadHabitantsByHairColorFail = error => ({
	type: types.STATS_HAB_BY_HAIRCOLOR_SUCCESS,
	error
});

export const loadHabitantsByHairColor = () => async dispatch => {
	try {
		const result = await readApi.getHairColors();
		dispatch(loadHabitantsByHairColorSuccess(result));
	} catch (error) {
		dispatch(loadHabitantsByHairColorFail(error));
	} finally {
	}
};

const loadHabitantsByProfessionSuccess = habitantsByProfession => ({
	type: types.STATS_HAB_BY_PROF_SUCCESS,
	habitantsByProfession
});

const loadHabitantsByProfessionFail = error => ({
	type: types.STATS_HAB_BY_PROF_FAIL,
	error
});

export const loadHabitantsByProfession = () => async dispatch => {
	try {
		const result = await readApi.getProfessions();
		dispatch(loadHabitantsByProfessionSuccess(result));
	} catch (error) {
		dispatch(loadHabitantsByProfessionFail(error));
	} finally {
	}
};
