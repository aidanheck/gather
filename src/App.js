import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';

import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './nprogress.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    numberOfEvents: 32,
    events: [],
    locations: [],
    currentLocation: 'all',
  }

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

  updateEvents = (location, eventNum = this.state.numberOfEvents) => {
    if (location) {
    getEvents().then((events) => {
      const locationEvents = location && location !== 'all' ? events.filter((event) => event.location === location) : events;
      this.setState( {
        events: locationEvents.slice(0, eventNum),
        numberOfEvents: eventNum
     });

     });
    }
    }

  render() {
    return (
      <div>
        <Navbar className="navbar" sticky="top" expand="lg">
        <Navbar.Brand className="logo" href="#">gather</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/membraned">github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/aidanheck/">linkedin</Nav.Link>
       </Nav>
       </Navbar.Collapse>
</Navbar>

      <div className="App">
        <Container className="appContainer">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        </Container>
      </div>
      
      </div>
    );
  }
}

export default App;