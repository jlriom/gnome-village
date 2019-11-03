import * as types from "../actionTypes";
import {
	getGnomeById,
	getGnomeByName
} from "../../../api/brastlewark-read-api";

const loadMyFriendsSuccess = myFriends => ({
	type: types.LOAD_MY_HAB_DETAILS_SUCCESS,
	myFriends
});

const loadMyFriendsFail = error => ({
	type: types.LOAD_MY_HAB_DETAILS_FAIL,
	error
});

export const loadMyFriends = id => async dispatch => {
	try {
		const myprofile = await getGnomeById(id);

		const myFriends = myprofile.friends.map(async friend => {
			return await getGnomeByName(friend);
		});

		dispatch(loadMyFriendsSuccess(myFriends));
	} catch (error) {
		dispatch(loadMyFriendsFail(error));
	} finally {
	}
};
