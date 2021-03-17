import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
      test('when user has not searched for a city, show upcoming events from all cities', ({ given, when, then }) => {
            given('user has not searched for any city', () => {

            });

            when('the user opens the app', () => {

            });

            then('the user should see the list of all upcoming events', () => {

            });
      });

      test('user should see a list of suggestions when they search for a city', ({ given, when, then }) => {
            given('the main page is open', () => {

            });

            when('the user starts typing in the city textbox', () => {

            });

            then('the user should receive a list of cities (suggestions) that match what they have typed', () => {

            });

      });

      test('user can select a city from the suggested list', ({
            given, and, when, then }) => {
                  given('user was typing "berlin" in the city textbox', () => {

                  });
                  
                  and('the list of suggested cities is showing', () => {

                  });

                  when('the user selects a city from the list', () => {

                  });

                  then('their city should be changed to the selected city', () => {

                  });

                  and('the user should receive a list of upcoming events in that city', () => {

                  });
            });
      });