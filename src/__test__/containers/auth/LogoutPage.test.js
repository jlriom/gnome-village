import React from "react";
import LogoutPage from "../../../containers/auth/LogoutPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
const store = configureStore();

const props = {
    show: false,
    handleClose: jest.fn(),
    logout: jest.fn()
}

describe("<LogoutPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <LogoutPage {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
