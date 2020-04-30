import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import LatestFilmCoverFlow from "./LatestFilmCoverFlow";

describe("Testing our LatestFilmCoverFlow component", () => {
  test("chk for the no of images ", () => {
    const testInstance = mount(<LatestFilmCoverFlow />);
    expect(testInstance.find("img").length).toBeGreaterThan(3);
  });

  test("Check welcome text", () => {
    const testInstance = mount(<LatestFilmCoverFlow />);
    expect(testInstance.find("#latestfilms-title").text()).toContain("Latest");
  });
});
