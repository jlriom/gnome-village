import * as types from "../actionTypes";
import { getGnomeByName } from "../../../api/brastlewark-read-api";
import { createGnome } from "../../../api/brastlewark-write-api";

const registerUserExistsYetFail = error => ({
	type: types.REGISTERME_AS_HAB_EXISTS_FAIL,
	error
});

const registerUserFail = error => ({
	type: types.REGISTERME_AS_HAB_FAIL,
	error
});

const registerUserSuccess = id => ({
	type: types.REGISTERME_AS_HAB_SUCCESS,
	id
});

// TODO replace by user struct
export const registerUser = ({
	name,
	thumbnail,
	age,
	weight,
	height,
	hair_color,
	professions
}) => async dispatch => {
	try {
		const user = await getGnomeByName(name);
		if (user !== null) {
			dispatch(
				registerUserExistsYetFail(`User with name  '${name}' exists yet`)
			);
		} else {
			var gnome = await createGnome({
				name,
				thumbnail,
				age,
				weight,
				height,
				hair_color,
				professions
			});

			dispatch(registerUserSuccess(gnome.id));
		}
	} catch (error) {
		dispatch(registerUserFail(error));
	} finally {
	}
};
