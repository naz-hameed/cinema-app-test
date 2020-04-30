import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import ScheduleForm from './ScheduleForm';



describe("Testing our home page", () => {

    test('Check schedule text', () => {
        const testInstance = mount(<ScheduleForm />);
        expect(testInstance.find('h1').text()).toContain("Schedule");
    })

    test('chk for component opening hours', () => {
        const testInstance = shallow(<ScheduleForm />);
        expect(testInstance.find("OpeningHours").exists()).toBeTruthy();
      });
      
      test('chk for component cinema schedule', () => {
        const testInstance = shallow(<ScheduleForm />);
        expect(testInstance.find("CinemaSchedule").exists()).toBeTruthy();
      });

      test('chk for component latestFilmCoverFlow', () => {
        const testInstance = shallow(<ScheduleForm />);
        expect(testInstance.find("LatestFilmCoverFlow").exists()).toBeTruthy();
      });

});