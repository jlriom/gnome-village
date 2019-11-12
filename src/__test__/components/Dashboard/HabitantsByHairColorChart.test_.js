import React from "react";
import HabitantsByHairColorChart from "../../../components/Dashboard/HabitantsByHairColorChart";
import renderer from "react-test-renderer";
import { habitantsByHairColor } from "../../fakeData";

describe("<HabitantsByHairColorChart />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <HabitantsByHairColorChart habitantsByHairColor={habitantsByHairColor} />
        );
        expect(tree).toMatchSnapshot();
    });
});

