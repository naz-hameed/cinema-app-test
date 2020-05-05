import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import CinemaSchedule from './Components/CinemaSchedule';



describe("Testing our cinema schedule", () => {

    test('Check if movie renders ', () => {
        const testInstance = mount(<CinemaSchedule />);
        expect(testInstance.find("#scheduletable").text()).toContain("Movie");
    })

    test('Check if schedule title renders ', () => {
        const testInstance = mount(<CinemaSchedule />);
        expect(testInstance.find("#schedule-title").text()).toContain("Show Times");
    })

    test('chk for hours table', () => {
        const testInstance = shallow(<CinemaSchedule />);
        expect(testInstance.find("#scheduletable").exists()).toBeTruthy();
      });

      test('chk for days', () => {
        const testInstance = shallow(<CinemaSchedule />);
        expect(testInstance.find("#movie").text()).toBe("Movie");
      });

      test('chk for times', () => {
        const testInstance = shallow(<CinemaSchedule />);
        expect(testInstance.find("#mon").text()).toBe("Mon");
      });

      test('chk for days', () => {
        const testInstance = shallow(<CinemaSchedule />);
        expect(testInstance.find("#tues").text()).toBe("Tues");
      });

      test('chk for times', () => {
        const testInstance = shallow(<CinemaSchedule />);
        expect(testInstance.find("#wed").text()).toBe("Wed");
      });


});