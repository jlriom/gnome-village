import React from "react";
import FriendsPage from "../../../containers/user/FriendsPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import { habitant, friends } from "../../fakeData";

const store = configureStore();

const props = {
    id: 0,
    profile: habitant,
    friends: friends,
    loadProfile: jest.fn(),
    loadFriends: jest.fn()
}

describe("<FriendsPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <FriendsPage {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
