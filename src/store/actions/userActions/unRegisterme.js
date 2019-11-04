import * as types from "../actionTypes";
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
		await deleteGnome(id);
		dispatch(unRegistermeSuccess());
	} catch (error) {
		dispatch(unRegistermeFail(error));
	} finally {
	}
};
