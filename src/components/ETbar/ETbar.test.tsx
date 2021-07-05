import React from "react";
import { shallow } from "enzyme";
import ETbar from "./ETbar";

describe("entertainment bar renders properly", () => {
  const minProps = {
    title: "",
    image: "",
    author: "",
  };

  it("should display right elements", () => {
    const component = shallow(<ETbar {...minProps} />);
    expect(component).toBeDefined();
    expect(component.find(".ET-bar").children().length).toBe(3);
  });
});
