import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

const minProps = {
  title: "",
  author: "",
  description: "",
  image: "",
  authorImg: "",
  authorProfession: "",
};

it("should render proper headline article", () => {
  const component = shallow(<Headline {...minProps} />);
  const article = component.find(".news-article").children();
  expect(component).toBeDefined();
  expect(article).toHaveLength(4);
});
