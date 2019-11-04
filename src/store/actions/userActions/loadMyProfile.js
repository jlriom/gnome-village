import * as types from "../actionTypes";
import { getGnomeById } from "../../../api/brastlewark-read-api";

const loadMyProfileSuccess = profile => ({
	type: types.LOAD_MY_HAB_DETAILS_SUCCESS,
	profile
});

const loadMyProfileFail = error => ({
	type: types.LOAD_MY_HAB_DETAILS_FAIL,
	error
});

export const loadMyProfile = id => async dispatch => {
	try {
		const profile = await getGnomeById(id);
		dispatch(loadMyProfileSuccess(profile));
	} catch (error) {
		dispatch(loadMyProfileFail(error));
	} finally {
	}
};
