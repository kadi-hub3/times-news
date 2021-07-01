import React from "react";
import { shallow } from "enzyme";
import ETbar from "./ETbar";

describe("entertainment bar renders properly", () => {
  const barProps = {
    title: "",
    image: "",
    author: "",
  };

  it("should display right elements", () => {
    const component = shallow(<ETbar {...barProps} />);
    expect(component.find(".ET-bar").children().length).toBe(3);
  });
});
