import React from "react";
import renderer from "react-test-renderer";
import Calculator from "../Components/Calculator";

describe("Calculator component", () => {
  it("should render correctly and match the saved snapshot", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
