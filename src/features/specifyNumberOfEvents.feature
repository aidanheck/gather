Feature: Specify Number of Events to Show

Scenario: 32 events are displayed by default
Given the app is opened in a browser
When the app is mounted
Then the number of events specified in the app's state will be shown

Scenario: the user can specify a number of events to show
Given that the user has opened the app
When the user changes the number of events
Then the specified number will be shown