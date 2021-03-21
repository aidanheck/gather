import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";

import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./nprogress.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
  };

  // updateEvents = (location, eventNum) => {
  //   if (location) {
  //   getEvents().then((events) => {
  //     const locationEvents = location && location !== 'all' ? events.filter((event) => event.location === location) : events;
  //     this.setState( {
  //       events: locationEvents.slice(0, eventNum),
  //       numberOfEvents: eventNum
  //    });
  //    });
  //   }
  //   }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === "all"
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" sticky="top" expand="lg">
          <Navbar.Brand className="logo" href="#">
            gather
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/membraned">github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/aidanheck/">
                linkedin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="App">
          <Container className="appContainer">
            <CitySearch
              locations={this.state.locations}
              updateEvents={this.updateEvents}
            />
              <NumberOfEvents
              numberOfEvents={this.state.numberOfEvents}
              updateEvents={this.updateEvents}
            />
            <EventList events={this.state.events} />
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
