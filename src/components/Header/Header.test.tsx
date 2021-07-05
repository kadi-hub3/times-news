import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";

describe("renders proper header ", () => {
  it("should render proper title", () => {
    const component = shallow(<Header />);
    const title = component.find("h1").text();
    expect(title).toBe("the la times");
  });

  it("should render proper list categories", () => {
    const component = shallow(<Header />).dive();
    const categories = component.find(".categories").getElements();
    const categoriesLength = component.find(".categories").children().length;
    expect(categories).toBeDefined();
    expect(categoriesLength).toBe(7);
  });

  it("shoudl render proper versions", () => {
    const component = shallow(<Header />);
    const versions = component.find(".lingo").getElements();
    const versionsLength = component.find(".lingo").children().length;
    expect(versions).toBeDefined();
    expect(versionsLength).toBe(3);
  });
});
