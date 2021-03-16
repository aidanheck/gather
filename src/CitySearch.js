import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySearch extends Component {
      state = {
            query: '',
            suggestions: [],
            showSuggestions: undefined,
            locations: this.props.locations,
      }

      handleInputChanged = (event) => {
            const value = event.target.value;
            this.setState({ showSuggestions: true });
            const suggestions = this.props.locations.filter((location) => {
                  return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
            });
            if (suggestions.length === 0) {
                  this.setState({
                        query: value,
                        showsSuggestions: false,
                  });
            } else {
                  this.setState({
                        query: value,
                        suggestions,
                        showSuggestions: true,
                  });
            }
      };


      handleItemClicked = (suggestion) => {
            this.setState({
                  query: suggestion,
                  suggestions: [],
                  showSuggestions: false,
            });

            this.props.updateEvents(suggestion);
      };

      render() {
            return (
                  <div className="CitySearch">
                        <input type="text" 
                        className="city" 
                        placeholder="search cities"
                        value={this.state.query} 
                        onChange={this.handleInputChanged} 
                        onFocus={() => { this.setState({showSuggestions: true}) }} />
                <ul  className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                        <li key='all' onClick={() => this.handleItemClicked('all')}>
                              <b>see all cities</b>
                        </li>
                  </ul>
                  
                  </div>
            );
      }
}

CitySearch.propTypes = {
      locations: PropTypes.array.isRequired,
      updateEvents: PropTypes.func.isRequired,
};

export default CitySearch;