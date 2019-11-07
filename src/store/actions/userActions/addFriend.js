import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { addFriendToGnome } from "../../../api/brastlewark-write-api";

const addFriendSuccess = () => ({
	type: types.ADD_FRIEND_SUCCESS
});

const addFriendFail = error => ({
	type: types.ADD_FRIEND_FAIL,
	error
});
addFriendFail.propTypes = {
	error: PropTypes.object
};

export const addFriend = (id, friend) => async dispatch => {
	try {
		dispatch(operationInProgress());
		await addFriendToGnome(id, friend);
		dispatch(addFriendSuccess());
	} catch (error) {
		dispatch(addFriendFail(error));
		dispatch(showError("Adding a friend", error));
	} finally {
		dispatch(operationDone());
	}
};
