import axios from "axios";
const BASE_URL = "http://localhost:5000";
const BASE_API = "brastlewark";
const HEADER_TOTAL_COUNT = "x-total-count";

var instance = axios.create({
	baseURL: BASE_URL,
	timeout: 30000
});

const getAllGnomes = async () => {
	const response = await instance.get(`${BASE_API}`);
	const total = parseInt(response.headers[HEADER_TOTAL_COUNT]);
	return { list: response.data, total };
};

const searchGnomes = async queryString => {
	if (queryString) {
		const response = await instance.get(`${BASE_API}?${queryString}`);
		const total = parseInt(response.headers[HEADER_TOTAL_COUNT]);
		return { list: response.data, total };
	}
	return await getAllGnomes();
};

const getGnomeById = async id => {
	const response = await instance.get(`${BASE_API}/${id}`);
	return response.data;
};

const getGnomesByName = async name => {
	const response = await instance.get(`${BASE_API}?name=${name}`);
	return response.data;
};

const createGnome = async gnome => {
	const response = await instance.post(`${BASE_API}`, {
		...gnome,
		friends: []
	});
	return response.data;
};

const updateGnome = async gnome => {
	const response = await instance.put(`${BASE_API}/${gnome.id}`, {
		...gnome
	});
	return response.data;
};

const deleteGnome = async id => {
	const response = await instance.delete(`${BASE_API}/${id}`);
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
