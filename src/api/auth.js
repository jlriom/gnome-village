import { getGnomeByName } from "./brastlewarkReadApi";

const GUEST_USER = "guest";
const GUEST_USER_ID = 0;

const login = async name => {
	if (name === GUEST_USER) {
		return { id: GUEST_USER_ID, username: name, isGuest: name === GUEST_USER };
	}

	const user = await getGnomeByName(name);
	if (user !== null) {
		return { id: user.id, username: name, isGuest: name === GUEST_USER };
	}

	throw new Error("User not found.\nTry with 'guest' user.");
};

export { login };
