import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import ScheduleForm from "./Components/ScheduleForm";
import SignUpPage from "./Components/SignUpPage";

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

  test("chk if it renders to home page on clicking home page", () => {
    const testInstance = shallow(<App />);

    testInstance.find("#home-btn").simulate("click");
    const testInstance1 = shallow(<HomePage />);

    expect(testInstance1.find("h1").text()).toEqual("Home");
  });

  test("chk if it renders to schedule page on clicking schedule page", () => {
    const testInstance = shallow(<App />);
    testInstance.find("#schedule-btn").simulate("click");
    const testInstance1 = shallow(<ScheduleForm />);
    expect(testInstance1.find("h1").text()).toEqual("Schedule");
  });

  test("chk if it renders to sign up page on clicking sign up page", () => {
    const testInstance = shallow(<App />);
    testInstance.find("#signup-btn").simulate("click");
    const testInstance1 = shallow(<SignUpPage />);
    expect(testInstance1.find("h1").text()).toEqual("Sign Up");
  });
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Check that there is a header component', () => {
//   const testInstance = shallow(<Header />);
//   expect(testInstance.find("h1").text()).toBe("Our Header");
// });

// test('Check that there is a Footer component', () => {
//   const testInstance = shallow(<Footer />);
//   expect(testInstance.find("h1").text()).toBe("Our Footer");
// });

//  test('button is labelled increment', () => {
//     expect(wrapper.find("button").text()).toContain("Increment");
//    });
