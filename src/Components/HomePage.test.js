import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import HomePage from './HomePage';



describe("Testing our home page", () => {

    test('Check welcome text', () => {
        const testInstance = mount(<HomePage />);
        expect(testInstance.find("#welcome").text()).toContain("Welcome");
    })

    test('chk if cinema images is rendered in homepage', () => {
        const testInstance = shallow(<HomePage />);
        expect(testInstance.find("CinemaImages").exists()).toBeTruthy();
      });


});