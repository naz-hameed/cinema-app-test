import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
import Header from './Components/Header';
import Footer from './Components/Footer';


describe("Testing our cinema app", () => {
  test('Render header component', () => {
   const testInstance = shallow(<App />);
    expect(testInstance.find("#home-btn").text()).toBe("Home");

  })
  

test('Check that there is a schedule button', () => {
    const testInstance = shallow(<App />);
    expect(testInstance.find("#schedule-btn").text()).toBe("Schedule");
})

test('Check that there is a sign up button', () => {
    const testInstance = shallow(<App />);
    expect(testInstance.find("#signup-btn").text()).toContain("Sign-Up");
})
  test('Render footer component', () => {
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