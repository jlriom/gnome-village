import * as types from "../actionTypes";
import { getProfessions } from "../../../api/brastlewark-read-api";

const loadHabitantsProfessionsSuccess = professions => ({
	type: types.LOAD_HAB_PROFESSIONS_SUCCESS,
	professions
});

export const loadHabitantsProfessions = () => async dispatch => {
	try {
		const result = await getProfessions();
		const professions = result.map(profession => profession.profession);
		dispatch(loadHabitantsProfessionsSuccess(professions));
	} catch (error) {
		alert(error);
	} finally {
	}
};
