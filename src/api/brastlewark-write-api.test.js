import * as writeApi from "./brastlewark-write-api";
import { getGnomeById } from "./brastlewark-read-api";

const writeApiTest = async () => {
	const gnomeToCreate = {
		name: "x",
		thumbnail:
			"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
		age: 306,
		weight: 39.065952,
		height: 107.75835,
		hair_color: "Pink",
		professions: [
			"Metalworker",
			"Woodcarver",
			"Stonecarver",
			" Tinker",
			"Tailor",
			"Potter"
		],
		friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
	};

	var gnome = await writeApi.createGnome(gnomeToCreate);
	var retrievedGnome = await getGnomeById(gnome.id);
	console.log(retrievedGnome);
	retrievedGnome.age = 5;
	await writeApi.updateGnome(retrievedGnome);

	await writeApi.addFriendToGnome(retrievedGnome.id, "another friend");
	await writeApi.addProfessionToGnome(retrievedGnome.id, "another profession");

	retrievedGnome = await getGnomeById(gnome.id);
	console.log(retrievedGnome);

	await writeApi.removeFriendFromGnome(retrievedGnome.id, "another friend");
	await writeApi.removeProfessionFromGnome(
		retrievedGnome.id,
		"another profession"
	);

	retrievedGnome = await getGnomeById(gnome.id);
	console.log(retrievedGnome);

	await writeApi.deleteGnome(retrievedGnome.id);
};

export default writeApiTest;
