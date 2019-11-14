import React from "react";
import RegisterPage from "../../../containers/user/RegisterPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import { habitant } from "../../../__mocks__/fakeData";

const store = configureStore();

const props = {
	profile: habitant,
	professions: [],
	hairColors: [],
	show: false,
	handleClose: jest.fn(),
	loadProfile: jest.fn(),
	loadHabitantsProfessions: jest.fn(),
	loadHabitantsHairColors: jest.fn(),
	registerUser: jest.fn(),
	showError: jest.fn()
};

describe("<RegisterPage />", () => {
	it("renders ok", () => {
		const tree = renderer.create(
			<Provider store={store}>
				<RegisterPage {...props} />
			</Provider>
		);
		expect(tree).toMatchSnapshot();
	});
});
