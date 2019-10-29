import * as readApi from "./brastlewark-read-api";

const readApiTest = async () => {
	// console.log(await readApi.getHairColors());

	console.log(await readApi.getProfessions());

	// console.log(await readApi.getGnomeById(67));

	// console.log(await readApi.getGnomeByName("Fizkin Voidbuster"));

	// console.log(await readApi.searchGnomes("buster", "Cook", "Pink"));
	// console.log(
	// 	await readApi.searchGnomes("buster", null, "Pink", "name", "asc", 2, 5)
	// );
	// console.log(await readApi.searchGnomes());
};

export default readApiTest;
