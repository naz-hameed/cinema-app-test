import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import LatestFilmCarousel from './Components/LatestFilmCarousel';

describe("Testing our cinema schedule", () => {

    test('Check if latest films title renders ', () => {
        const testInstance = mount(<LatestFilmCarousel />);
        expect(testInstance.find("#latestfilms-title").text()).toContain("Latest");
    })


});
