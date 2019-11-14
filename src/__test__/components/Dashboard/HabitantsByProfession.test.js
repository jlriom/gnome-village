import React from "react";
import HabitantsByProfession from "../../../components/Dashboard/HabitantsByProfession";
import renderer from "react-test-renderer";
import { habitantsByProfession } from "../../fakeData";

describe("<HabitantsByProfession />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <HabitantsByProfession habitantsByProfession={habitantsByProfession} />
        );
        expect(tree).toMatchSnapshot();
    });
});
