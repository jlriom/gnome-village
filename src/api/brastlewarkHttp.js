import axios from "axios";
const BASE_API = "http://localhost:5000/brastlewark";
const HEADER_TOTAL_COUNT = "x-total-count";

const getAllGnomes = async () => {
	const response = await axios.get(`${BASE_API}`);
	let total = 0;
	if (response.headers) {
		total = parseInt(response.headers[HEADER_TOTAL_COUNT]);
	}
	return { list: response.data, total };
};

const searchGnomes = async queryString => {
	if (queryString) {
		const response = await axios.get(`${BASE_API}?${queryString}`);
		let total = 0;
		if (response.headers) {
			total = parseInt(response.headers[HEADER_TOTAL_COUNT]);
		}
		return { list: response.data, total };
	}
	return await getAllGnomes();
};

const getGnomeById = async id => {
	const response = await axios.get(`${BASE_API}/${id}`);
	return response.data;
};

const getGnomesByName = async name => {
	const response = await axios.get(`${BASE_API}?name=${name}`);
	return response.data;
};

const createGnome = async gnome => {
	const response = await axios.post(`${BASE_API}`, {
		...gnome,
		friends: []
	});
	return response.data;
};

const updateGnome = async gnome => {
	const response = await axios.put(`${BASE_API}/${gnome.id}`, {
		...gnome
	});
	return response.data;
};

const deleteGnome = async id => {
	const response = await axios.delete(`${BASE_API}/${id}`);
	return response.data;
};

export {
	getAllGnomes,
	searchGnomes,
	getGnomeById,
	getGnomesByName,
	createGnome,
	updateGnome,
	deleteGnome
};
