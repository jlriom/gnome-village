import * as types from "../actionTypes";
import { getGnomeById } from "../../../api/brastlewark-read-api";

const loadMyProfileSuccess = myProfile => ({
	type: types.LOAD_MY_HAB_DETAILS_SUCCESS,
	myProfile
});

const loadMyProfileFail = error => ({
	type: types.LOAD_MY_HAB_DETAILS_FAIL,
	error
});

export const loadMyProfile = id => async dispatch => {
	try {
		const myprofile = await getGnomeById(id);
		dispatch(loadMyProfileSuccess(myprofile));
	} catch (error) {
		dispatch(loadMyProfileFail(error));
	} finally {
	}
};
