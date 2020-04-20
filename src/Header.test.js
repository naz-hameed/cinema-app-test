import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import Header from './Components/Header';
import renderer from 'react-test-renderer';


describe("Testing our header", () => {
    test('Check that there is a home button', () => {
        const testInstance = shallow(<Header />);
        expect(testInstance.find("#home-btn").text()).toBe("Home");
    })

    test('Check that there is a schedule button', () => {
        const testInstance = shallow(<Header />);
        expect(testInstance.find("#schedule-btn").text()).toBe("Schedule");
    })

    test('Check that there is a sign up button', () => {
        const testInstance = shallow(<Header />);
        expect(testInstance.find("#signup-btn").text()).toBe("SignUp");
    })

    test('Check the logo', () => {
        const testInstance = shallow(<Header />);
        expect(testInstance.find("img").prop("src")).toEqual("cinema-logo.png");
    })
});

it('Snapshot test for header rendering correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
})

// test('check the menu', () => {
//     const testInstance = shallow(<Header />);
//     expect(testInstance.find("#Schedule-btn").text()).toBe("Schedule");
//     })

//     test('check the nav bar', () => {
//         const testInstance = shallow(<Header />);
//         expect(testInstance.find("#Navbar").text()).toBe("Navbar");
//         })




