import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import CinemaImages from './CinemaImages';



describe("Testing our cinema images", () => {


    test('chk if cinema images is rendered in homepage', () => {
        const testInstance = mount(<CinemaImages />);
        expect(testInstance.find('img').length).toEqual(3);
      });





});