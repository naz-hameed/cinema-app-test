import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import Header from './Components/Header';
import Footer from './Components/Footer';


describe("testing our cinema app", () => {

  test('render header component', () => {
   const testInstance = mount(<App />);
    expect(testInstance.find("#home-btn").text()).toBe("Home");
  })
  
  test('render footer component', () => {
    const testInstance = mount(<App />);
     expect(testInstance.find("Footer").text()).toContain("Sky");
   })


});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Check that there is a header component', () => {
//   const testInstance = shallow(<Header />);
//   expect(testInstance.find("h1").text()).toBe("Our Header");
// });


// test('Check that there is a Footer component', () => {
//   const testInstance = shallow(<Footer />);
//   expect(testInstance.find("h1").text()).toBe("Our Footer");
// });

//  test('button is labelled increment', () => {
//     expect(wrapper.find("button").text()).toContain("Increment");
//    });