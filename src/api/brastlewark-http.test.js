import * as brastlewarkHttp from "./brastlewark-http";

const brastlewarkHttpTest = async () => {
	const gnomes = await brastlewarkHttp.getAllGnomes();
	console.log(gnomes);

	const searchGnomes = await brastlewarkHttp.searchGnomes("name_like=Fizwood");
	console.log(searchGnomes);

	const gnome = await brastlewarkHttp.getGnomeById(5);
	console.log(gnome);

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

	const createdGnome = await brastlewarkHttp.createGnome(gnomeToCreate);
	console.log("createdGnome ", createdGnome);

	const retrievedGnome = await brastlewarkHttp.getGnomesByName(
		gnomeToCreate.name
	);
	console.log("retrievedGnome", retrievedGnome);

	if (retrievedGnome.length > 0) {
		const gnomeToUpdate = retrievedGnome[0];

		gnomeToUpdate.professions = ["Woodcarver", "1", "2", "3"];
		console.log("gnomeToUpdate", gnomeToUpdate);

		await brastlewarkHttp.updateGnome(gnomeToUpdate);
		const gnome = await brastlewarkHttp.getGnomeById(gnomeToUpdate.id);
		console.log("getById", gnome);
		await brastlewarkHttp.deleteGnome(gnome.id);
	}
};

export default brastlewarkHttpTest;
