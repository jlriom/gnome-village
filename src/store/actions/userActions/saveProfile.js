import * as types from "../actionTypes";
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

const saveProfileFail = error => ({
	type: types.SAVE_HAB_DETAILS_FAIL,
	error
});

export const saveProfile = profile => async dispatch => {
	try {
		dispatch(operationInProgress());
		const myprofile = await updateGnome({ ...profile });
		console.log(profile);
		dispatch(saveProfileSuccess(myprofile));
		dispatch(showMessage("", "Your user profile has been updated"));
	} catch (error) {
		dispatch(saveProfileFail(error));
		dispatch(showError("Saving my profile", error));
	} finally {
		dispatch(operationDone());
	}
};
