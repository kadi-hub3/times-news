import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("renders proper footer", () => {
  it("should render proper list items", () => {
    const component = shallow(<Footer />);
    const p = component.find("p").text();
    expect(p).toBe(" © 2021 The Los Angeles Times");
    const footerItems = component.find("ul").children();
    expect(footerItems).toBeDefined();
    expect(footerItems.length).toBe(11);
  });
});
