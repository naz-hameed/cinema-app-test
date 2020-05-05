import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import OpeningHours from './OpeningHours';



describe("Testing OpeningHours component", () => {

    test('Check if opening hours table exists', () => {
        const testInstance = mount(<OpeningHours />);
        expect(testInstance.find("#hours-title").text()).toContain("Cinema");
    })

    test('chk for hours table', () => {
        const testInstance = shallow(<OpeningHours />);
        expect(testInstance.find("#hourstable").exists()).toBeTruthy();
      });

      test('chk for days', () => {
        const testInstance = shallow(<OpeningHours />);
        expect(testInstance.find("#days").text()).toBe("Days");
      });

      test('chk for times', () => {
        const testInstance = shallow(<OpeningHours />);
        expect(testInstance.find("#times").text()).toBe("Times");
      });


});