import React from "react";
import HomePage from "../../containers/HomePage";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';

describe("<HomePage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
        expect(tree).toMatchSnapshot();
    });
});
