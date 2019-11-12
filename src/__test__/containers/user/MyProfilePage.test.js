import React from "react";
import MyProfilePage from "../../../containers/user/MyProfilePage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import { habitant } from "../../fakeData";

const store = configureStore();

const props = {
    id: 0,
    profile: habitant,
    professions: [],
    hairColors: [],
    show: false,
    handleClose: jest.fn(),
    loadProfile: jest.fn(),
    loadHabitantsProfessions: jest.fn(),
    loadHabitantsHairColors: jest.fn(),
    saveProfile: jest.fn(),
    showError: jest.fn()
}

describe("<MyProfilePage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MyProfilePage {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
