import * as fakeData from "./fakeData";

export default {
	get: jest.fn(() =>
		Promise.resolve({
			data: fakeData.habitants
		})
	),
	post: jest.fn(() => Promise.resolve({ data: fakeData.habitant })),
	put: jest.fn(() => Promise.resolve({ data: fakeData.habitant })),
	delete: jest.fn(() => Promise.resolve({ data: fakeData.habitant }))
};
