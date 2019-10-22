import axios from "axios";

const BASE_URL = "http://localhost:5000";

const getAllGnomes = async () => {
	const response = await axios.get(`${BASE_URL}/brastlewark`);
	return response.data;
};

const searchGnomes = async queryString => {
	if (queryString) {
		const response = await axios.get(`${BASE_URL}/brastlewark?${queryString}`);
		return response.data;
	}
	return await getAllGnomes();
};

const getGnomeById = async id => {
	const response = await axios.get(`${BASE_URL}/brastlewark/${id}`);
	return response.data;
};

const getGnomesByName = async name => {
	const response = await axios.get(`${BASE_URL}/brastlewark?name=${name}`);
	return response.data;
};

const createGnome = async gnome => {
	const response = await axios.post(`${BASE_URL}/brastlewark`, {
		...gnome
	});
	return response.data;
};

const updateGnome = async gnome => {
	const response = await axios.put(`${BASE_URL}/brastlewark/${gnome.id}`, {
		...gnome
	});
	return response.data;
};

const deleteGnome = async id => {
	const response = await axios.delete(`${BASE_URL}/brastlewark/${id}`);
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
