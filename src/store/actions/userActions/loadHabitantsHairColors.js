import * as types from "../actionTypes";
import { getHairColors } from "../../../api/brastlewark-read-api";

const loadHabitantsHairColorsSuccess = hairColors => ({
	type: types.LOAD_HAB_HAIR_COLORS_SUCCESS,
	hairColors
});

export const loadHabitantsHairColors = () => async dispatch => {
	try {
		const result = await getHairColors();
		const hairColors = result.map(hairColor => hairColor.hair_color);
		dispatch(loadHabitantsHairColorsSuccess(hairColors));
	} catch (error) {
		alert(error);
	} finally {
	}
};
