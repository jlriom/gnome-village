import React from "react";
import RegisterLinkPopup from "../../components/RegisterLinkPopup";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

import configureStore from "../../store/configureStore";
const store = configureStore();


describe("<RegisterLinkPopup />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <RegisterLinkPopup />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
