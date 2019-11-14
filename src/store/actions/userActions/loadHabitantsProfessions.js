import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { getProfessions } from "../../../api/brastlewarkReadApi";

const loadHabitantsProfessionsSuccess = professions => ({
	type: types.LOAD_HAB_PROFESSIONS_SUCCESS,
	professions
});

loadHabitantsProfessionsSuccess.propTypes = {
	professions: PropTypes.array.isRequired
};

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
