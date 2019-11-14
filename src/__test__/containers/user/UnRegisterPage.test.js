import React from "react";
import UnRegisterPage from "../../../containers/user/UnRegisterPage";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../../store/configureStore";

const store = configureStore();

const props = {
    id: 0,
    name: "name",
    unRegisterme: jest.fn(),
    logout: jest.fn(),
    show: false,
    handleClose: jest.fn()
}

describe("<UnRegisterPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <UnRegisterPage {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});

