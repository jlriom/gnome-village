import { defaultAppState } from "./appState";
import { noError } from "./errorState";
import { defaultSearchCriteria } from "./searchState";
import { defaultProfile } from "./profileState";

export default {
	app: defaultAppState,
	auth: {
		username: "",
		id: null,
		isLoggedIn: false,
		isGuest: false
	},
	stats: {
		habitantsByProfession: [],
		habitantsByHairColor: [],
		error: noError
	},
	habitants: {
		list: [],
		total: 0,
		searchCriteria: defaultSearchCriteria,
		error: noError
	},
	user: {
		id: null,
		profile: defaultProfile,
		professions: [],
		hairColors: [],
		friends: [],
		error: noError
	}
};
