import React from "react";
import HabitantsByProfessionChart from "../../../components/Dashboard/HabitantsByProfessionChart";
import renderer from "react-test-renderer";
import { habitantsByProfession } from "../../fakeData";

describe("<HabitantsByProfessionChart />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <HabitantsByProfessionChart habitantsByProfession={habitantsByProfession} />
        );
        expect(tree).toMatchSnapshot();
    });
});

