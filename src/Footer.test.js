import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import Footer from './Components/Footer';


describe("testing our footer", () => {

    test('render footer component', () => {
    const testInstance = shallow(<Footer />);
    expect(testInstance.find("footer").text()).toContain("Sky");
    })

});