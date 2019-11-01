import { getGnomeByName } from "./brastlewark-read-api";

const GUEST_USER = "guest";

const login = async name => {
	if (name === GUEST_USER || (await getGnomeByName(name)) !== null) {
		return { username: name, isGuest: name === GUEST_USER };
	}
	throw new Error("User not found.\nTry with 'guest' user.");
};

export { login };
