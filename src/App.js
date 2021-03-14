import React, { Component } from 'react';
import NumberOfEvents from './NumberOfEvents';
import CitySearch from './CitySearch';
import EventList from './EventList';
import { extractLocations, getEvents } from './api';
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
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: '32',
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

  updateEvents = (location, eventNum ) => {
    getEvents().then((events) => {
      const locationEvents = events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventNum
      });
    });
  }

//   updateEvents = (location, eventCount) => {
//   const { currentLocation, numberOfEvents } = this.state;
//   // if user selects a location from input
//   if (location) {
//     getEvents().then((response) => {
//       // Applies new filter for location
//       const locationEvents =
//         location === 'all'
//           ? response.events
//           : response.events.filter((event) => event.location === location);
//       return this.setState({
//         events: numberOfEvents,
//         currentLocation: location,
//         locations: response.locations,
//       });
//     });
//   } else {
//     getEvents().then((response) => {
//       // Persists location filter from state
//       const locationEvents =
//         currentLocation === 'all'
//           ? response.events
//           : response.events.filter(
//               (event) => event.location === currentLocation
//             );
//       if (this.mounted) {
//         return this.setState({
//           events: numberOfEvents,
//           numberOfEvents: eventCount,
//           locations: response.locations,
//         });
//       }
//     });
//   }
// };

  render() {

    let { events, locations, selectedLocation, numberOfEvents } = this.state;

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
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <EventList events={events} />
        <NumberOfEvents numberOfEvents={numberOfEvents} selectedLocation={selectedLocation} updateEvents={this.updateEvents} />
        </Container>
      </div>
      </div>
    );
  }
}

export default App;