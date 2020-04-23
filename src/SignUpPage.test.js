import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import SignUpForm from './Components/SignUpForm';



describe("Testing our sign up form", () => {

    test('Check if title renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#title").text()).toContain("Title");
    })

    test('Check if first name renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#firstname").text()).toContain("First Name");
    })

    test('Check if last name renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#lastname").text()).toContain("Last Name");
    })

    test('Check if email renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#emailid").text()).toContain("Email");
    })

    test('Check if date of birth renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#dob").text()).toContain("Date");
    })

    test('Check if phone number renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#phonenum").text()).toContain("Phone");
    })

    test('Check if male radio button renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#male-btn").text()).toContain("Male");
    })

    test('Check if female radio button renders ', () => {
        const testInstance = mount(<SignUpForm />);
        expect(testInstance.find("#female-btn").text()).toContain("Female");
    })

    test('Check that there is a sign up button', () => {
    const testInstance = mount(<SignUpForm />);
    expect(testInstance.find("#signup-btn").text()).toBe("Sign me up !");
})

});