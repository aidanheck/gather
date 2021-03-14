import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberOfEvents extends Component {
      constructor() {
            super();
            this.handleInput = this.handleInput.bind(this);
      }
      state = {
          numberOfEvents: '32'
      }

      handleInput = (event) => {
            const value = event.target.value;

            if (value < 1 ) {
                  console.error('please choose a number greater than or equal to 1');
            } else {
                  this.setState({ numberOfEvents: value });
            }
      };

      render () {
      return (
            <div className="NumberOfEvents">
                  <label className="eventNumLabel">number of events: &nbsp;</label>
                  <input 
                        className="number"
                        type="number"
                        value={this.state.numberOfEvents}
                        onChange={this.handleInput}>
                        </input>
                  </div>
                  
             );
      }
}

NumberOfEvents.propTypes = {
      numberOfEvents: PropTypes.string,
      updateEvents: PropTypes.func,
};

export default NumberOfEvents;