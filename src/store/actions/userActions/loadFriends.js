import * as types from "../actionTypes";
import {
	getGnomeById,
	getGnomeByName
} from "../../../api/brastlewark-read-api";

const loadFriendsSuccess = myFriends => ({
	type: types.LOAD_HAB_DETAILS_SUCCESS,
	myFriends
});

const loadFriendsFail = error => ({
	type: types.LOAD_HAB_DETAILS_FAIL,
	error
});

export const loadFriends = id => async dispatch => {
	try {
		const profile = await getGnomeById(id);

		const myFriends = profile.friends.map(async friend => {
			return await getGnomeByName(friend);
		});

		dispatch(loadFriendsSuccess(myFriends));
	} catch (error) {
		dispatch(loadFriendsFail(error));
	} finally {
	}
};
