import React from "react";
import If from "../../components/If";
import renderer from "react-test-renderer";

const props = {
    condition: false
}

describe("<If />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <If {...props} />
        );
        expect(tree).toMatchSnapshot();
    });
});
