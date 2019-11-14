import React from "react";
import HabitantDetailsEdit from "../../components/HabitantDetailsEdit";
import renderer from "react-test-renderer";
import { habitant } from "../../__mocks__/fakeData";

const props = {
	id: 0,
	mode: { mode: "edit", title: "My profile", submitCaption: "Save" },
	profile: habitant,
	professions: [],
	hairColors: [],
	show: false,
	handleClose: jest.fn(),
	loadHabitantsProfessions: jest.fn(),
	loadHabitantsHairColors: jest.fn(),
	loadProfile: jest.fn(),
	registerUser: jest.fn(),
	saveProfile: jest.fn(),
	showError: jest.fn()
};

describe("<HabitantDetailsEdit />", () => {
	it("renders ok", () => {
		const tree = renderer.create(<HabitantDetailsEdit {...props} />);
		expect(tree).toMatchSnapshot();
	});
});
