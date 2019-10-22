import * as brastlewarkHttp from "./brastlewark-http";

const getHairColors = async () => {
	const gnomes = await brastlewarkHttp.getAllGnomes();
	return [...new Set(gnomes.map(data => data.hair_color))];
};

const getProfessions = async () => {
	const gnomes = await brastlewarkHttp.getAllGnomes();
	var professions = gnomes
		.map(data => [...data.professions])
		.reduce((total, currentValue) => (total = [...total, ...currentValue]));
	return [...new Set(professions)];
};

const searchGnomes = async (
	name,
	profession,
	hairColor,
	sort,
	order,
	page,
	limit
) => {
	let queryString = "";
	let expressions = [];

	expressions = addExpression(expressions, "name_like", name);
	expressions = addExpression(expressions, "professions_like", profession);
	expressions = addExpression(expressions, "hair_color", hairColor);
	expressions = addExpression(expressions, "_sort", sort);
	expressions = addExpression(expressions, "_order", order);
	expressions = addExpression(expressions, "_page", page);
	expressions = addExpression(expressions, "_limit", limit);

	queryString = expressions.join("&");

	const gnomes = await brastlewarkHttp.searchGnomes(queryString);
	return gnomes;
};

const addExpression = (expressions, parameter, value) => {
	if (value && value !== "") {
		expressions.push(`${parameter}=${value}`);
	}
	return expressions;
};

const getGnomeById = async id => {
	return await brastlewarkHttp.getGnomeById(id);
};

const getGnomeByName = async name => {
	const gnomes = await brastlewarkHttp.getGnomesByName(name);
	if (gnomes.length === 1) {
		return gnomes[0];
	}
	return null;
};

export {
	searchGnomes,
	getGnomeById,
	getGnomeByName,
	getHairColors,
	getProfessions
};
