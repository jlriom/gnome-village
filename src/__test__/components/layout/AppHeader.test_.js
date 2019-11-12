import React from "react";
import AppHeader from "../../../components/layout/AppHeader";
import renderer from "react-test-renderer";
import { auth } from "../../fakeData";

describe("<AppHeader />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <AppHeader auth={auth} />
        );
        expect(tree).toMatchSnapshot();
    });
});

