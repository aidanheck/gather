import React, { Component } from 'react';

class NumberOfEvents extends Component {
      state = {
          numberOfEvents: 32
      }

      handleInput = (event) => {
            const value = event.target.value;

            if (value < 1 ) {
                  console.error('please choose a number greater than or equal to 1');
            } else {
                  this.setState({ numberOfEvents: value });
                  this.props.updateEvents(this.props.selectedLocation, value);
            }
      };

      render () {
      return (
            <div className="NumberOfEvents">
                  <label className="eventNumLabel">number of events: &nbsp;</label>
                  <input 
                        className="events"
                        type="number"
                        value={this.props.numberOfEvents}
                        onChange={this.handleInput}>
                        </input>
                  </div>
                  
             );
      }
}

export default NumberOfEvents;