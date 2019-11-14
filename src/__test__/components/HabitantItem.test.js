import React from "react";
import HabitantItem from "../../components/HabitantItem";
import renderer from "react-test-renderer";
import { habitant } from "../fakeData";
import { MemoryRouter } from 'react-router-dom';

const props = {
    habitant: habitant,
    manageFriends: false,
    myId: 0,
    myfriends: [],
    addFriend: jest.fn(),
    removeFriend: jest.fn(),
    addRemoveFriend: jest.fn()
};

describe("<HabitantItem />", () => {
    it("renders ok", () => {
        const tree = renderer.create(
            <MemoryRouter>
                <HabitantItem {...props} />
            </MemoryRouter>
        );
        expect(tree).toMatchSnapshot();
    });
});
