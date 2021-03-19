Feature: Show and Hide Event Details

Scenario: An event is collapsed by default
Given the app is opened in a browser
When the app is mounted
And all events are loaded
Then all events are collapsed

Scenario: User clicks an event's show details button to see its details
Given the app is mounted
And all events are loaded
When the user clicks the show details button of an event
Then the event's details are shown

Scenario: User can collapse an event and hide its details
Given the user has expanded an event's details
When the user clicks the show details event button again
Then the event details are collapsed