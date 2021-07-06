import React from "react";
import { shallow, mount } from "enzyme";
import Newsletter from "./Newsletter";

describe("render proper newsletter", () => {
  it("should render proper text content", () => {
    //after click
    const component = shallow(<Newsletter />);
    const heading = component.find("h3");
    expect(heading).toEqual({});
    //     expect(heading).toMatchSnapshot();
  });
});
