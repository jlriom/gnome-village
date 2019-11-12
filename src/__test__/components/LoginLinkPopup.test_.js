import React from "react";
import LoginLinkPopup from "../../components/LoginLinkPopup";
import renderer from "react-test-renderer";


describe("<LoginLinkPopup />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <LoginLinkPopup />
        );
        expect(tree).toMatchSnapshot();
    });
});
