import React from "react";
import NotFoundPage from "../../containers/NotFoundPage";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';

describe("<NotFoundPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );
        expect(tree).toMatchSnapshot();
    });
});

