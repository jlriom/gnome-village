import React from "react";
import HabitantPage from "../../../containers/brastlewark/HabitantPage";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import { habitant, friends } from "../../fakeData";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
const store = configureStore();

const props = {
    id: 0,
    profile: habitant,
    friends: friends,
    loadProfile: jest.fn(),
    loadFriends: jest.fn()
}

describe("<HabitantPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <HabitantPage {...props} />
                </MemoryRouter>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
