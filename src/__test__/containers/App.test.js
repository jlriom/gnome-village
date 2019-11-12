import React from "react";
import App from "../../containers/App";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

const store = configureStore();

describe("<App />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
