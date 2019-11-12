import React from "react";
import RegisterLinkPopup from "../../components/RegisterLinkPopup";
import renderer from "react-test-renderer";


describe("<RegisterLinkPopup />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <RegisterLinkPopup />
        );
        expect(tree).toMatchSnapshot();
    });
});
