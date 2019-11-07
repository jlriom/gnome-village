import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError,
	showMessage
} from "../../actions/appActions";
import { updateGnome } from "../../../api/brastlewark-write-api";

const saveProfileSuccess = profile => ({
	type: types.SAVE_HAB_DETAILS_SUCCESS,
	profile
});

saveProfileSuccess.propTypes = {
	profile: PropTypes.object.isRequired
};

const saveProfileFail = error => ({
	type: types.SAVE_HAB_DETAILS_FAIL,
	error
});

saveProfileFail.propTypes = {
	error: PropTypes.object.isRequired
};

export const saveProfile = profile => async dispatch => {
	try {
		dispatch(operationInProgress());
		const myprofile = await updateGnome({ ...profile });
		dispatch(saveProfileSuccess(myprofile));
		dispatch(
			showMessage("Saving profile", "Your user profile has been updated")
		);
	} catch (error) {
		dispatch(saveProfileFail(error));
		dispatch(showError("Saving my profile", error));
	} finally {
		dispatch(operationDone());
	}
};

saveProfile.propTypes = {
	profile: PropTypes.object.isRequired
};
