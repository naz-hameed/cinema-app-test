import React from 'react';
import { configure, mount } from 'enzyme';
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


});