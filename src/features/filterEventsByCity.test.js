import React from "react";
import Enzyme from "enzyme";
import { shallow, mount } from "enzyme";
import App from "../App";
import CitySearch from "../CitySearch";
import { mockData } from "../mock-data";
import { extractLocations } from "../api";
import { loadFeature, defineFeature } from "jest-cucumber";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test("when user has not searched for a city, show upcoming events from all cities", ({
    given,
    when,
    then,
  }) => {
    given("user has not searched for any city", () => {});
    let AppWrapper;
    when("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    then("the user should see the list of all upcoming events", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

  test("user should see a list of suggestions when they search for a city", ({
    given,
    when,
    then,
  }) => {
    let CitySearchWrapper, locations;
    given("the main page is open", () => {
      locations = extractLocations(mockData);
      CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
    });

    when("the user starts typing in the city textbox", () => {
      CitySearchWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
    });

    then(
      "the user should receive a list of cities (suggestions) that match what they have typed",
      () => {
        expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(2);
      }
    );
  });

  test("user can select a city from the suggested list", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given('user was typing "berlin" in the city textbox', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.find(".city").simulate("change", {
        target: { value: "Berlin" },
      });
    });

    and("the list of suggested cities is showing", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".suggestions li")).toHaveLength(2);
    });

    when("the user selects a city from the list", () => {
      AppWrapper.find(".suggestions li").at(0).simulate("click");
    });

    then("their city should be changed to the selected city", () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state("query")).toBe("Berlin, Germany");
    });

    and(
      "the user should receive a list of upcoming events in that city",
      () => {
        expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
      }
    );
  });
});
