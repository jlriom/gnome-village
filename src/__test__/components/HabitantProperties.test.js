import React from "react";
import HabitantProperties from "../../components/HabitantProperties";
import renderer from "react-test-renderer";
import { habitant } from "../../__mocks__/fakeData";

describe("<HabitantProperties />", () => {
	it("renders ok", () => {
		const tree = renderer.create(<HabitantProperties {...habitant} />);
		expect(tree).toMatchSnapshot();
	});
});
