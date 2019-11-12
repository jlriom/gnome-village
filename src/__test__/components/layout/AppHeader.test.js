import React from "react";
import AppHeader from "../../../components/layout/AppHeader";
import renderer from "react-test-renderer";
import { auth } from "../../fakeData";
import { MemoryRouter } from 'react-router-dom';

import { Provider } from "react-redux";

import configureStore from "../../../store/configureStore";

const store = configureStore();

describe("<AppHeader />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <AppHeader auth={auth} />
                </MemoryRouter>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
});

