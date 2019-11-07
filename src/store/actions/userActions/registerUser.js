import * as types from "../actionTypes";
import { operationInProgress, operationDone } from "../../actions/appActions";
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
		dispatch(operationInProgress());

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
		dispatch(operationDone());
	}
};
