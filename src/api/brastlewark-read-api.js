import * as brastlewarkHttp from "./brastlewark-http";

// eslint-disable-next-line no-extend-native
Array.prototype.groupBy = function(prop) {
	return this.reduce(function(groups, item) {
		const val = item[prop];
		groups[val] = groups[val] || [];
		groups[val].push(item);
		return groups;
	}, {});
};

const getHairColors = async () => {
	const gnomes = await brastlewarkHttp.getAllGnomes();
	const gnomesByHairColor = gnomes.list.groupBy("hair_color");
	return Object.entries(gnomesByHairColor)
		.map(entry => {
			return { hair_color: entry[0], count: entry[1].length };
		})
		.sort((a, b) => {
			if (a.hair_color.trim() > b.hair_color.trim()) return 1;
			if (b.hair_color.trim() > a.hair_color.trim()) return -1;
			return 0;
		});
};

const getProfessions = async () => {
	const gnomes = await brastlewarkHttp.getAllGnomes();

	var professions = gnomes.list
		.map(data => [...data.professions])
		.reduce((total, currentValue) => (total = [...total, ...currentValue]));

	let gnomesByProfession = [...new Set(professions)].map(profession => {
		return { profession, count: 0 };
	});

	professions.reduce(
		(total, current) =>
			gnomesByProfession.find(profession => profession.profession === current)
				.count++
	);

	return gnomesByProfession.sort((a, b) => {
		if (a.profession.trim() > b.profession.trim()) return 1;
		if (b.profession.trim() > a.profession.trim()) return -1;
		return 0;
	});
};

const searchGnomes = async ({
	name,
	profession,
	hairColor,
	sort,
	order,
	page,
	limit
}) => {
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

	const result = await brastlewarkHttp.searchGnomes(queryString);
	return result;
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
