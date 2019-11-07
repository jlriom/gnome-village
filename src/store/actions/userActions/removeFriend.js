import * as types from "../actionTypes";
import { operationInProgress, operationDone } from "../../actions/appActions";
import { removeFriendFromGnome } from "../../../api/brastlewark-write-api";

const removeFriendSuccess = () => ({
	type: types.REMOVE_FRIEND_SUCCESS
});

const removeFriendFail = error => ({
	type: types.REMOVE_FRIEND_FAIL,
	error
});

export const removeFriend = (id, friend) => async dispatch => {
	try {
		dispatch(operationInProgress());

		await removeFriendFromGnome(id, friend);
		dispatch(removeFriendSuccess());
	} catch (error) {
		dispatch(removeFriendFail(error));
	} finally {
		dispatch(operationDone());
	}
};
