import * as types from "../actionTypes";
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
		const myprofile = await updateGnome({ ...profile });
		dispatch(saveProfileSuccess(myprofile));
	} catch (error) {
		dispatch(saveProfileFail(error));
	} finally {
	}
};
