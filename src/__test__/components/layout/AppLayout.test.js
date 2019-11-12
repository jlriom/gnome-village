import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import renderer from "react-test-renderer";
import { auth } from "../../fakeData";
import { Provider } from "react-redux";

import configureStore from "../../../store/configureStore";
const store = configureStore();

const props = {
    auth, loading: false, message: {}
}

describe("<AppLayout />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <AppLayout {...props} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});

