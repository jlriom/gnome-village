import React from "react";
import TotalSection from "../../../components/Dashboard/TotalSection";
import renderer from "react-test-renderer";
import { habitantsByHairColor } from "../../../__mocks__/fakeData";

describe("<TotalSection />", () => {
	it("renders ok", () => {
		const tree = renderer.create(
			<TotalSection habitantsByHairColor={habitantsByHairColor} />
		);
		expect(tree).toMatchSnapshot();
	});
});
