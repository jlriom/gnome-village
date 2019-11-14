import React from "react";
import CategoryItem from "../../../components/Dashboard/CategoryItem";
import renderer from "react-test-renderer";
import { category } from "../../../__mocks__/fakeData";

describe("<CategoryItem />", () => {
	it("renders ok", () => {
		const tree = renderer.create(<CategoryItem {...category} />);
		expect(tree).toMatchSnapshot();
	});
});
