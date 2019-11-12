import React from "react";
import AppLayout from "../../../components/layout/AppLayout";
import renderer from "react-test-renderer";
import { auth } from "../../fakeData";

const props = {
    auth, loading: false, message: ""
}

describe("<AppLayout />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <AppLayout {...props} />
        );
        expect(tree).toMatchSnapshot();
    });
});

