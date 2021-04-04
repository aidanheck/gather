import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button"
import EventModal from "./EventModal";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    const { event } = this.props;

    return (
      <Container className="eventContainer">
      <div className="event">
        <div className="eventCard">
          <h1 className="eventCardName">{event.summary}</h1>
          <p className="eventCardDate">starts: {event.start.dateTime}</p>
          <p className="eventCardDate">timezone: {event.start.timeZone}</p>
          <p className="eventCardLocation">location: {event.location}</p>
          </div>
          <hr></hr>
        <div className="modalButton">
          <EventModal />
        </div>
        <p></p>
{/*           
      {!this.state.showDetails && (
            <Button
              variant="primary"
              className="detailsButton"
              onClick={() => this.handleShowDetails()}
            >
              show details
            </Button>
          )}

          {this.state.showDetails && (
            <div className="eventOpen">
              <p className="eventCardLink">link: {event.htmlLink}</p>
              <p className="eventCardDesc">description: {event.description}</p>
              <button
                className="details-btn"
                onClick={() => this.handleShowDetails()}
              >
                hide details
              </button>
            </div>
          )} */}
      </div>
      </Container>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;