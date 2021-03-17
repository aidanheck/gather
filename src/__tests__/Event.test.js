import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => (EventWrapper = shallow(<Event event={mockData[0]} />)));

  test("render event card", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render the contents of the event card", () => {
    EventWrapper.setState({ showDetails: false });
    expect(EventWrapper.find(".eventCard").children()).toHaveLength(5);
  });

  test("render the event element", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".eventOpen")).toHaveLength(1);
  });

  test("render contents of the eventOpen element", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".eventOpen").children()).toHaveLength(3);
  });

  test("render the details button", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("show event details when the details button is clicked", () => {
    EventWrapper.setState({ showDetails: false });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("hide event details the details button is clicked again", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
});
