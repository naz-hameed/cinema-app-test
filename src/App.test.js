import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter(),});
import Header from "./Components/Header";
import Footer from "./Components/Footer";

describe("Testing our cinema app", () => {
  test("Render header component", () => {
    const testInstance = shallow(<App />);
    expect(testInstance.find("#home-btn").text()).toBe("Home");
  });

  test("Check that there is a schedule button", () => {
    const testInstance = shallow(<App />);
    expect(testInstance.find("#schedule-btn").text()).toBe("Schedule");
  });

  test("Check that there is a sign up button", () => {
    const testInstance = shallow(<App />);
    expect(testInstance.find("#signup-btn").text()).toContain("Sign-Up");
  });
  test("Render footer component", () => {
    const testInstance = mount(<App />);
    expect(testInstance.find("Footer").text()).toContain("Sky");
  });
});


