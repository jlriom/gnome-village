import React from "react";
import SessionDropdown from "../../components/SessionDropdown";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import configureStore from "../../store/configureStore";
const store = configureStore();

const auth = {
    username: "username",
    isGuest: false
}

describe("<SessionDropdown />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <SessionDropdown auth={auth} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
