import React from "react";
import renderer from "react-test-renderer";
import Footer from "../components/Footer";

describe("Calculator component", () => {
  it("should render correctly and match the saved snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});