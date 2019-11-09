import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import {
	getGnomeById,
	getGnomeByName
} from "../../../api/brastlewark-read-api";

const loadFriendsSuccess = friends => ({
	type: types.LOAD_FRIENDS_SUCCESS,
	friends
});

loadFriendsSuccess.propTypes = {
	friends: PropTypes.array.isRequired
};

const loadFriendsFail = error => ({
	type: types.LOAD_FRIENDS_FAIL,
	error
});

loadFriendsFail.propTypes = {
	error: PropTypes.object.isRequired
};

export const loadFriends = id => async dispatch => {
	try {
		dispatch(operationInProgress());

		let profile;
		if (!isNaN(id)) {
			profile = await getGnomeById(id);
		} else {
			const name = id;
			profile = await getGnomeByName(name);
		}

		const friends = await Promise.all(
			profile.friends.map(friend => {
				return getGnomeByName(friend);
			})
		);

		dispatch(loadFriendsSuccess(friends));
	} catch (error) {
		dispatch(loadFriendsFail(error));
		dispatch(showError("Loading friends", error));
	} finally {
		dispatch(operationDone());
	}
};
