import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Modal } from "react-bootstrap";
// import EventModal from "./EventModal";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleModalDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
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
          <p></p>
          <Container>
            <Button
              variant="danger"
              className="detailsButton"
              onClick={() => this.handleModalDetails()}
            >
              show details
            </Button>
            <Modal
              centered
              show={this.state.showDetails}
            >
              <Modal.Header
                   className="detailModal"
                closeButton
                onClick={() => this.handleModalDetails()}
              >
                <Modal.Title>{event.summary}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="detailModal">
            <p className="eventCardDate">starts: {event.start.dateTime}</p>
            <p className="eventCardDate">timezone: {event.start.timeZone}</p>
            <p className="eventCardLocation">location: {event.location}</p>
            <p className="eventCardDesc"> {event.description}</p>
            <Button href={event.htmlLink} className="linkButton">see details in google calendar!</Button>

              </Modal.Body>
              <Modal.Footer      className="detailModal">
                <Button
                  variant="danger"
                  className="closeButton"
                  onClick={() => this.handleModalDetails()}
                >
                  close
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </div>
      </Container>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;
