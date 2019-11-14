import * as httpApi from "../brastlewarkHttp";
import * as fakeData from "../../__mocks__/fakeData";
import axiosMock from "axios";

describe("Axios Api", () => {
	it("getAllGnomes returns all habitants", async () => {
		const result = await httpApi.getAllGnomes();
		expect(result.list).toBe(fakeData.habitants);
	});

	it("getGnomeById returns an habitant", async () => {
		const result = await httpApi.getGnomeById(fakeData.habitant.id);
		expect(result[0]).toStrictEqual(fakeData.habitant);
	});

	it("getGnomeByName returns an habitant", async () => {
		const result = await httpApi.getGnomesByName(fakeData.habitant.name);
		expect(result[0]).toStrictEqual(fakeData.habitant);
	});

	it("createGnome performs a post http request and returns an habitant", async () => {
		const result = await httpApi.createGnome(fakeData.habitant);
		expect(axiosMock.post.mock.calls.length).toBe(1);
		expect(result).toStrictEqual(fakeData.habitant);
	});

	it("updateGnome performs a put http request and returns an habitant", async () => {
		const result = await httpApi.updateGnome(fakeData.habitant);
		expect(axiosMock.put.mock.calls.length).toBe(1);
		expect(result).toStrictEqual(fakeData.habitant);
	});

	it("deleteGnome performs a delete http request", async () => {
		await httpApi.deleteGnome(fakeData.habitant);
		expect(axiosMock.delete.mock.calls.length).toBe(1);
	});
});
