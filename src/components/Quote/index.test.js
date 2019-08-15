import React from "react";
import Quote from "./index";
import renderer from "react-test-renderer";

test("Quote renders correctly", () => {
	const wrapper = shallow(<Quote author="It is an author" quote="It is a quote" loading="false" />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('[name="toggle-preview"]').simulate("click");
	expect(wrapper).toMatchSnapshot();
});
