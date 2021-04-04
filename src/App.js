import React, { Component } from "react";
import { extractLocations, getEvents } from "./api";

import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { WarningAlert } from "./Alert";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "bootstrap/dist/css/bootstrap.min.css";
import EventTechnology from "./EventTechnology";
import "./App.css";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 3,
    currentLocation: "all",
    warningText: "",
  };

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

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
        });
      }
    });
    if (!navigator.onLine) {
      this.setState({
        warningText:
          "You are currently using the app offline and viewing data from your last visit. The app will not be updated with the latest events.",
      });
    } else {
      this.setState({
        warningText: "",
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(" ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    return (
      <div>
        <Navbar className="navbar" variant="dark" sticky="top" expand="lg">
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
            <WarningAlert text={this.state.warningText} />
            <CitySearch
              locations={this.state.locations}
              updateEvents={this.updateEvents}
            />
            <NumberOfEvents className="numberOfEvents"
              numberOfEvents={this.state.numberOfEvents}
              updateEvents={this.updateEvents}
            />

            <Container className="columns">
              <Row>
                <Col>
            <Container className="data-vis-wrapper">
              <Container className="tech-container">
                <br></br>
                <h4 className="chart-label">technologies</h4>
              <ResponsiveContainer >
                <EventTechnology events={this.state.events} />
              </ResponsiveContainer>
              </Container> 
              <Container className="city-container">
                <br></br>
              <h4 className="chart-label">events in each city</h4>
              <ResponsiveContainer height={400}>
                <ScatterChart align="left"
                  margin={{ top: 20, right: 30, bottom: 10, left: -20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis
                    allowDecimals={false}
                    type="number"
                    dataKey="number"
                    name="number of events"
                  />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter
                    name="locations"
                    data={this.getData()}
                    fill="#CE2430"
                  />
                </ScatterChart>
              </ResponsiveContainer>
              </Container>
            </Container>
            </Col>
            <Col>
            <Container className="outerEventContainer">
            <EventList events={this.state.events} />
            </Container>
            </Col>
            </Row>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
