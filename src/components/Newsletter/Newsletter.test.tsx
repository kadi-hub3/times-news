import React from "react";
import { shallow, mount } from "enzyme";
import Newsletter from "./Newsletter";

let component: any;

beforeEach(() => {
  component = mount(<Newsletter />);
});
describe("render proper newsletter", () => {
  it("should render proper text content", () => {
    const heading = component.find("div");
    expect(heading).toHaveLength(1);
  });
});
