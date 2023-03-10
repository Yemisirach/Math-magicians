import React from "react";
import renderer from "react-test-renderer";
import Quote from "../components/Quote";

describe("Calculator component", () => {
  it("should render correctly and match the saved snapshot", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
