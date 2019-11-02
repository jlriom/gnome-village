import { getGnomeByName } from "./brastlewark-read-api";

const GUEST_USER = "guest";

const login = async name => {
	if (name === GUEST_USER) {
		return { id: 0, username: name, isGuest: name === GUEST_USER };
	}

	const user = await getGnomeByName(name);
	if (user !== null) {
		return { id: user.id, username: name, isGuest: name === GUEST_USER };
	}

	throw new Error("User not found.\nTry with 'guest' user.");
};

export { login };
