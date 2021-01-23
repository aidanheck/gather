import React, { Component } from 'react';

class NumberOfEvents extends Component {
      state = {
            numOfEvents: 2,
      }

      handleInput = (event) => {
            const value = event.target.value;
            this.props.updateEvents(null, value);
            this.setState({ numOfEvents: value });

            if (value < 1 ) {
                  console.error('please choose a number greater than 0');
            } else {
                  this.setState.numOfEvents = value;
            }
      };

      render () {
      return (
            <div className="NumberOfEvents">
                  <label className="eventNumLabel">number of events</label>
                  <input 
                        className="eventNumber"
                        type="number"
                        value={this.state.numOfEvents}
                        onChange={this.handleInput}>
                        </input>
                  </div>
             );
      }
}

export default NumberOfEvents;