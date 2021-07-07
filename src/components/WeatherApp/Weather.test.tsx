import React from "react";
import { shallow } from "enzyme";
import Weather from "./Weather";

it("should render weather component properly", () => {
  const wrapper = shallow(<Weather />);
  const children = wrapper.find(".weather").children();
  expect(children).toBeDefined();
  expect(children).toHaveLength(2);

  const tempDiv = wrapper.find(".weather-temp div").children();
  expect(tempDiv).toHaveLength(3);
});
