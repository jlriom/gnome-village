import * as brastlewarkHttp from "./brastlewarkHttp";

const createGnome = async gnome => {
	return await brastlewarkHttp.createGnome(gnome);
};

const updateGnome = async gnome => {
	const currentGnome = await brastlewarkHttp.getGnomeById(gnome.id);

	return await brastlewarkHttp.updateGnome({
		...gnome,
		friends: currentGnome.friends
	});
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
