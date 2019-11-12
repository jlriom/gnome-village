import React from "react";
import HabitantDetails from "../../components/HabitantDetails";
import renderer from "react-test-renderer";
import { habitant, friends } from "../fakeData";

describe("<HabitantDetails />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <HabitantDetails profile={habitant} friends={friends} />
        );
        expect(tree).toMatchSnapshot();
    });
});
