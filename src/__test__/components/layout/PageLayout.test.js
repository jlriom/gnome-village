import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import renderer from "react-test-renderer";

describe("<PageLayout />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <PageLayout headerText={"header"} />
        );
        expect(tree).toMatchSnapshot();
    });
});

