import * as types from "../actionTypes";
import { operationInProgress, operationDone } from "../../actions/appActions";
import { addFriendToGnome } from "../../../api/brastlewark-write-api";

const addFriendSuccess = () => ({
	type: types.ADD_FRIEND_SUCCESS
});

const addFriendFail = error => ({
	type: types.ADD_FRIEND_FAIL,
	error
});

export const addFriend = (id, friend) => async dispatch => {
	try {
		dispatch(operationInProgress());
		await addFriendToGnome(id, friend);
		dispatch(addFriendSuccess());
	} catch (error) {
		dispatch(addFriendFail(error));
	} finally {
		dispatch(operationDone());
	}
};
