import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError,
	showMessage
} from "../../actions/appActions";
import { getGnomeByName } from "../../../api/brastlewarkReadApi";
import { createGnome } from "../../../api/brastlewarkWriteApi";

const registerUserExistsYetFail = error => ({
	type: types.REGISTERME_AS_HAB_EXISTS_FAIL,
	error
});

registerUserExistsYetFail.propTypes = {
	error: PropTypes.object.isRequired
};

const registerUserFail = error => ({
	type: types.REGISTERME_AS_HAB_FAIL,
	error
});

registerUserFail.propTypes = {
	error: PropTypes.object.isRequired
};

const registerUserSuccess = id => ({
	type: types.REGISTERME_AS_HAB_SUCCESS,
	id
});

registerUserSuccess.propTypes = {
	error: PropTypes.object.isRequired
};

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
			const message = `User with name  '${name}' exists yet`;
			dispatch(registerUserExistsYetFail(message));
			dispatch(showError("Registering my profile", message));
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
			dispatch(
				showMessage(
					"Registering my profile",
					`User ${name} has been registered.\n You can login to the application.`
				)
			);
		}
	} catch (error) {
		dispatch(registerUserFail(error));
		dispatch(showError("Registering my profile", error));
	} finally {
		dispatch(operationDone());
	}
};

registerUser.propTypes = {
	name: PropTypes.string.isRequired,
	thumbnail: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	hair_color: PropTypes.string.isRequired,
	professions: PropTypes.array.isRequired
};
