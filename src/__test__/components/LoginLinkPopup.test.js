import React from "react";
import LoginLinkPopup from "../../components/LoginLinkPopup";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import configureStore from "../../store/configureStore";
const store = configureStore();

describe("<LoginLinkPopup />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginLinkPopup />
                </MemoryRouter>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});
