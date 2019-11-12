import React from "react";
import HabitantsByHairColor from "../../../components/Dashboard/HabitantsByHairColor";
import renderer from "react-test-renderer";
import { habitantsByHairColor } from "../../fakeData";

describe("<HabitantsByHairColor />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <HabitantsByHairColor habitantsByHairColor={habitantsByHairColor} />
        );
        expect(tree).toMatchSnapshot();
    });
});

