import * as types from "../actionTypes";
import { getGnomeById } from "../../../api/brastlewark-read-api";
import { defaultProfile } from "../../state/profileState";

const loadProfileSuccess = profile => ({
	type: types.LOAD_HAB_DETAILS_SUCCESS,
	profile
});

const loadProfileFail = error => ({
	type: types.LOAD_HAB_DETAILS_FAIL,
	error
});

export const loadProfile = id => async dispatch => {
	try {
		if (!isNaN(id)) {
			const profile = await getGnomeById(id);
			dispatch(loadProfileSuccess(profile));
		} else {
			dispatch(loadProfileSuccess(defaultProfile));
		}
	} catch (error) {
		dispatch(loadProfileFail(error));
	} finally {
	}
};
