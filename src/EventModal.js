import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Modal } from "react-bootstrap";

class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  handleModalDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const { event } = this.props;
    return (
      <Container>
        <Button
          variant="danger"
          className="detailsButton"
          onClick={() => this.handleModalDetails()}
        >
          show details
        </Button>
        <Modal centered className="detailModal" show={this.state.showDetails}>
          <Modal.Header closeButton onClick={() => this.handleModalDetails()}>
            {/* <Modal.Title>{event.summary}</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            {/* <p className="eventCardDate">starts: {event.start.dateTime}</p>
            <p className="eventCardDate">timezone: {event.start.timeZone}</p>
            <p className="eventCardLocation">location: {event.location}</p>
            <p className="eventCardLink">link: {event.htmlLink}</p>
            <p className="eventCardDesc">description: {event.description}</p> */}
          </Modal.Body>
          <Modal.Footer>
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
    );
  }
}

EventModal.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventModal;
