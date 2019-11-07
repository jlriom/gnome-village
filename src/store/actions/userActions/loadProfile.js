import * as types from "../actionTypes";
import { operationInProgress, operationDone } from "../../actions/appActions";
import {
	getGnomeById,
	getGnomeByName
} from "../../../api/brastlewark-read-api";
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
	} finally {
		dispatch(operationDone());
	}
};
