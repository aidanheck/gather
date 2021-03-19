import React from "react";
import Enzyme from "enzyme";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import { loadFeature, defineFeature } from "jest-cucumber";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event is collapsed by default", ({ given, when, and, then }) => {
    given("the app is opened in a browser", () => {});
    let AppWrapper;
    when("the app is mounted", () => {
      AppWrapper = mount(<App />);
    });
    and("all events are loaded", async () => {
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
    then("all events are collapsed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".eventOpen")).toHaveLength(0);
    });
  });
  test("User clicks an event's show details button to see its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the app is mounted", () => {
      AppWrapper = mount(<App />);
    });
    and("all events are loaded", async () => {
      await AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
    when("the user clicks the show details button of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });
    then("the event's details are shown", () => {
      expect(AppWrapper.find(".event .eventOpen")).toHaveLength(1);
    });
  });
  test("User can collapse an event and hide its details", ({
    given,
    when,
    then,
  }) => {
    //     let AppWrapper;
    let EventWrapper;
    given("the user has expanded an event's details", async () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ showDetails: true });
      expect(EventWrapper.find(".eventOpen")).toHaveLength(1);
    });
    when("the user clicks the show details event button again", () => {
      EventWrapper.update();
      EventWrapper.find(".event .details-btn").at(0).simulate("click");
    });
    then("the event details are collapsed", () => {
      expect(EventWrapper.find(".eventOpen")).toHaveLength(0);
    });
  });
});
