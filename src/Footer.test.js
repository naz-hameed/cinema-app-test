import React from "react";
import {render} from "@testing-library/react";
import App from "./App";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter(),});
import Footer from "./Components/Footer";
import renderer from "react-test-renderer";

describe("Testing our footer", () => {
  test("Render footer component", () => {
    const testInstance = shallow(<Footer />);
    expect(testInstance.find("footer").text()).toContain("Sky");
  });
});

it("Snapshot test for footer rendering correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
