import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CitySearch extends Component {
      state = {
            query: '',
            suggestions: [],
            showSuggestions: false,
            locations: this.props.locations,
      }

      handleItemClicked = (suggestion) => {
            this.setState({
                  query: suggestion,
                  suggestions: [],
                  showSuggestions: false,
            });
            this.props.updateEvents(suggestion);
      };

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
                  });
            }
      };

      render() {
            let { query, suggestions, showSuggestions } = this.state;
            return (
                  <div className="CitySearch">
                        <input type="text" 
                        className="city" 
                        placeholder="search cities"
                        value={query} 
                        onChange={this.handleInputChanged} 
                        onFocus={() => { this.setState({ showSuggestions: true }) }} />
                  <ul className="suggestions" style={showSuggestions ? {} : { display: 'none' }}>
                        {suggestions.map((suggestion) => (
                              <li id={suggestions} key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
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