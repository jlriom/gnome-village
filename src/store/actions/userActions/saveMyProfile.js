import * as types from "../actionTypes";
import { updateGnome } from "../../../api/brastlewark-write-api";

const saveMyProfileSuccess = myProfile => ({
	type: types.SAVE_MY_HAB_DETAILS_SUCCESS,
	myProfile
});

const saveMyProfileFail = error => ({
	type: types.SAVE_MY_HAB_DETAILS_FAIL,
	error
});

export const saveMyProfile = profile => async dispatch => {
	try {
		const myprofile = await updateGnome({ ...profile });
		dispatch(saveMyProfileSuccess(myprofile));
	} catch (error) {
		dispatch(saveMyProfileFail(error));
	} finally {
	}
};
