import * as types from "../actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { deleteGnome } from "../../../api/brastlewarkWriteApi";

const unRegistermeSuccess = () => ({
	type: types.UNREGISTERME_AS_HAB_SUCCESS
});

const unRegistermeFail = error => ({
	type: types.UNREGISTERME_AS_HAB_FAIL,
	error
});

unRegistermeFail.propTypes = {
	profile: PropTypes.object.isRequired
};

export const unRegisterme = id => async dispatch => {
	try {
		dispatch(operationInProgress());

		await deleteGnome(id);
		dispatch(unRegistermeSuccess());
	} catch (error) {
		dispatch(unRegistermeFail(error));
		dispatch(showError("Removing my profile", error));
	} finally {
		dispatch(operationDone());
	}
};

unRegistermeFail.propTypes = {
	id: PropTypes.number.isRequired
};
