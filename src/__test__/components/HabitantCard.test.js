import React from "react";
import HabitantCard from "../../components/HabitantCard";
import renderer from "react-test-renderer";
import { habitant } from "../../__mocks__/fakeData";

describe("<HabitantCard />", () => {
	it("renders ok", () => {
		const tree = renderer.create(<HabitantCard habitant={habitant} />);
		expect(tree).toMatchSnapshot();
	});
});
