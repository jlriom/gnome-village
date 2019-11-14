import React from "react";
import AppFooter from "../../../components/layout/AppFooter";
import renderer from "react-test-renderer";

describe("<AppFooter />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <AppFooter />
        );
        expect(tree).toMatchSnapshot();
    });
});

