import React, { Component } from "react";

class Event extends Component {
      state = {
            showDetails: false,
      }

      handleShowDetails = () => {
            if (this.state.showDetails === false) {
                  this.setState({ showDetails: true });
            }
            else {
                  this.setState({ showDetails: false })
            }
      };

  render() {
        const { event } = this.props;

    return (
    <div className="event">
          <div className="eventCard">
                <h1 className="eventCardName">{event.summary}</h1>
                <p className="eventCardDate">starts: {event.start.dateTime}</p>
                <p className="eventCardDate">timezone: {event.start.timeZone}</p>
                <p className="eventCardLocation">location: {event.location}</p>

                {!this.state.showDetails &&
                <button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>}

                {this.state.showDetails &&
                (<div className="eventOpen">
                      <p className="eventCardLink">link: {event.htmlLink}</p>
                      <p className="eventCardDesc">description: {event.description}</p>
                      <button className="details-btn" onClick={() => this.handleShowDetails()}>hide details</button>
                </div>)
                }
          </div>

    </div>
    );
  }
}

export default Event;