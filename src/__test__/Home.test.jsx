import React from "react";
import renderer from "react-test-renderer";
import Home from "../components/Home";

describe("Calculator component", () => {
  it("should render correctly and match the saved snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
