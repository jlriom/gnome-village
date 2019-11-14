import React from "react";
import AboutPage from "../../containers/AboutPage";
import renderer from "react-test-renderer";

describe("<AboutPage />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <AboutPage />
        );
        expect(tree).toMatchSnapshot();
    });
});

