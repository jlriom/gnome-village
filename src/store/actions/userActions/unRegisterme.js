import * as types from "../actionTypes";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { deleteGnome } from "../../../api/brastlewark-write-api";

const unRegistermeSuccess = () => ({
	type: types.UNREGISTERME_AS_HAB_SUCCESS
});

const unRegistermeFail = error => ({
	type: types.UNREGISTERME_AS_HAB_FAIL,
	error
});

export const unRegisterme = id => async dispatch => {
	try {
		dispatch(operationInProgress());

		await deleteGnome(id);
		dispatch(unRegistermeSuccess());
	} catch (error) {
		dispatch(unRegistermeFail(error));
		dispatch(showError("Removing my profile", error));
	} finally {
		dispatch(operationDone());
	}
};
