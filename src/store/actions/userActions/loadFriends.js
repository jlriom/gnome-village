import * as types from "../actionTypes";
import {
	getGnomeById,
	getGnomeByName
} from "../../../api/brastlewark-read-api";

const loadFriendsSuccess = friends => ({
	type: types.LOAD_FRIENDS_SUCCESS,
	friends
});

const loadFriendsFail = error => ({
	type: types.LOAD_FRIENDS_FAIL,
	error
});

export const loadFriends = id => async dispatch => {
	try {
		const profile = await getGnomeById(id);

		const friends = await Promise.all(
			profile.friends.map(friend => {
				return getGnomeByName(friend);
			})
		);

		dispatch(loadFriendsSuccess(friends));
	} catch (error) {
		dispatch(loadFriendsFail(error));
	} finally {
	}
};
