import * as types from "../actionTypes";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { getProfessions } from "../../../api/brastlewark-read-api";

const loadHabitantsProfessionsSuccess = professions => ({
	type: types.LOAD_HAB_PROFESSIONS_SUCCESS,
	professions
});

export const loadHabitantsProfessions = () => async dispatch => {
	try {
		dispatch(operationInProgress());

		const result = await getProfessions();
		const professions = result.map(profession => profession.profession);
		dispatch(loadHabitantsProfessionsSuccess(professions));
	} catch (error) {
		dispatch(showError("Loading habitants' professions", error));
	} finally {
		dispatch(operationDone());
	}
};
