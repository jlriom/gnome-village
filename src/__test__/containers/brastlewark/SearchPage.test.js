import React from "react";
import SearchPage from "../../../containers/brastlewark/SearchPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
import { habitant, friends } from "../../../__mocks__/fakeData";

const store = configureStore();

const props = {
	id: 0,
	isGuest: false,
	searchCriteria: {},
	habitantList: [habitant],
	total: 1,
	friends: friends,
	searchHabitants: jest.fn(),
	loadFriends: jest.fn(),
	addFriend: jest.fn(),
	removeFriend: jest.fn()
};

describe("<FriendsPage />", () => {
	it("renders ok", () => {
		const tree = renderer.create(
			<Provider store={store}>
				<SearchPage {...props} />
			</Provider>
		);
		expect(tree).toMatchSnapshot();
	});
});
