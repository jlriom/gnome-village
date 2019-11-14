import React from "react";
import LoginPage from "../../../containers/auth/LoginPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";
const store = configureStore();

const props = {
    show: false,
    handleClose: jest.fn(),
    login: jest.fn()
}

describe("<LogoutPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <LoginPage {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
