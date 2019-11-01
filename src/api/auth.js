import { getGnomeByName } from "./brastlewark-read-api";

const GUEST_USER = "guest";

const login = async name => {
	if (name === GUEST_USER || (await getGnomeByName(name).length) === 1) {
		return name;
	}

	throw new Error("User not found.\nTry with 'guest' user.");
};

export { login };
