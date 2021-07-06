import React from "react";
import { shallow } from "enzyme";
import TechBar from "./TechBar";

const minProps = {
  title: "",
  author: "",
  description: "",
  authorImg: "",
};

describe("tech side bar renders properly", () => {
  it("should render side bar article", () => {
    const wrapper = shallow(<TechBar {...minProps} />);
    const sideBar = wrapper.find("div").children();
    expect(sideBar).toBeDefined();
    expect(sideBar).toHaveLength(6);
  });
});
