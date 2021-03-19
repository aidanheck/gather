import React from "react";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from "jest-cucumber";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("32 events are displayed by default", ({ given, when, then }) => {
    given("the app is opened in a browser", () => {});
    let AppWrapper;
    when("the app is mounted", () => {
      AppWrapper = mount(<App />);
    });
    then(
      "the number of events specified in the app's state will be shown",
      async () => {
        await AppWrapper.update();
        expect(AppWrapper.state("numberOfEvents")).toEqual(32);
      }
    );
  });
  test("the user can specify a number of events to show", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("that the user has opened the app", () => {
      AppWrapper = mount(<App />);
    });
    when("the user changes the number of events", () => {
      AppWrapper.find(".number").simulate("change", { target: { value: 2 } });
    });
    then("the specified number will be shown", () => {
      const EventWrapper = AppWrapper.find(NumberOfEvents);
      expect(EventWrapper.state("numberOfEvents")).toEqual(2);
    });
  });
});
