import * as brastlewarkHttp from "./brastlewark-http";

const createGnome = async gnome => {
	return await brastlewarkHttp.createGnome(gnome);
};

const updateGnome = async gnome => {
	return await brastlewarkHttp.updateGnome(gnome);
};

const deleteGnome = async id => {
	return await brastlewarkHttp.deleteGnome(id);
};

const addFriendToGnome = async (id, friendName) => {
	const gnome = await brastlewarkHttp.getGnomeById(id);
	if (gnome) {
		gnome.friends = [...new Set([...gnome.friends, friendName])];
		await brastlewarkHttp.updateGnome(gnome);
	}
};

const removeFriendFromGnome = async (id, friendName) => {
	const gnome = await brastlewarkHttp.getGnomeById(id);
	if (gnome) {
		const friends = gnome.friends.filter(friend => friend !== friendName);
		gnome.friends = friends;
		await brastlewarkHttp.updateGnome(gnome);
	}
};

export {
	createGnome,
	updateGnome,
	deleteGnome,
	addFriendToGnome,
	removeFriendFromGnome
};
