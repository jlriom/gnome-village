import * as types from "../actionTypes";
import {
	operationInProgress,
	operationDone,
	showError
} from "../../actions/appActions";
import { getHairColors } from "../../../api/brastlewark-read-api";

const loadHabitantsHairColorsSuccess = hairColors => ({
	type: types.LOAD_HAB_HAIR_COLORS_SUCCESS,
	hairColors
});

export const loadHabitantsHairColors = () => async dispatch => {
	try {
		dispatch(operationInProgress());

		const result = await getHairColors();
		const hairColors = result.map(hairColor => hairColor.hair_color);
		dispatch(loadHabitantsHairColorsSuccess(hairColors));
	} catch (error) {
		dispatch(showError("Loading habitants' hair colors", error));
	} finally {
		dispatch(operationDone());
	}
};
