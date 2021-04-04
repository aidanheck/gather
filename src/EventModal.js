import React, { Component } from "react";
import PropTypes from "prop-types";
// import Container from "react-bootstrap/Container";
import { Button, Modal }  from "react-bootstrap";

class EventModal extends Component {
    constructor(){
      super();
      this.state = {
          showDetails : false
      }
  }

  handleModalDetails() {
      this.setState({ showDetails: !this.state.showDetails })
  }
// state = {
//             showDetails: false,
//           };

//   handleClose = () => {
//     this.setState({ showDetails: false });
//   };

//   handleShow = () => {
//     this.setState({ showDetails: true });
//   };

  render() {

    const { event } = this.props;
    return (
      <>
        <Button
          variant="primary"
          className="detailsButton"
          onClick={() => this.handleModalDetails()}
        >
          show details
        </Button>
        <Modal show={this.state.showDetails}>
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
              variant="primary"
              className="detailsButton"
              onClick={() => this.handleModalDetails()}
            >
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

EventModal.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventModal;
