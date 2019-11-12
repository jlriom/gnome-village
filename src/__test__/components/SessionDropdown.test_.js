import React from "react";
import SessionDropdown from "../../components/SessionDropdown";
import renderer from "react-test-renderer";

const auth = {
    username: "username",
    isGuest: false
}

describe("<SessionDropdown />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <SessionDropdown auth={auth} />
        );
        expect(tree).toMatchSnapshot();
    });
});
