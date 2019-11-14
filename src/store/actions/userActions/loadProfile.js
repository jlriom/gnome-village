import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { getGnomeById, getGnomeByName } from "../../../api/brastlewarkReadApi";
import { defaultProfile } from "../../state/profileState";

const loadProfileSuccess = profile => ({
	type: types.LOAD_HAB_DETAILS_SUCCESS,
	profile
});

loadProfileSuccess.propTypes = {
	profile: PropTypes.object.isRequired
};

const loadProfileFail = error => ({
	type: types.LOAD_HAB_DETAILS_FAIL,
	error
});

loadProfileFail.propTypes = {
	profile: PropTypes.object.isRequired
};

export const loadProfile = id => async dispatch => {
	try {
		dispatch(operationInProgress());
		if (id === null) {
			dispatch(loadProfileSuccess(defaultProfile));
		} else if (!isNaN(id)) {
			const profile = await getGnomeById(id);
			dispatch(loadProfileSuccess(profile));
		} else {
			const name = id;
			const profile = await getGnomeByName(name);
			dispatch(loadProfileSuccess(profile));
		}
	} catch (error) {
		dispatch(loadProfileFail(error));
		dispatch(showError("Loading Profile", error));
	} finally {
		dispatch(operationDone());
	}
};
