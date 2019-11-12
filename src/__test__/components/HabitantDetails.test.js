import React from "react";
import HabitantDetails from "../../components/HabitantDetails";
import renderer from "react-test-renderer";
import { habitant, friends } from "../fakeData";
import { MemoryRouter } from 'react-router-dom';

describe("<HabitantDetails />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <HabitantDetails profile={habitant} friends={friends} />
            </MemoryRouter>
        );
        expect(tree).toMatchSnapshot();
    });
});
