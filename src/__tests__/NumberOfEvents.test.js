import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
      let NumberOfEventsWrapper;

      beforeAll(() => {
            NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {} } />);
      });

      test('render text input', () => {
            expect(NumberOfEventsWrapper.find('.eventNumber')).toHaveLength(1);
      });

      test('renders text input correctly', () => {
            const numofEvents = NumberOfEventsWrapper.state('numOfEvents');
            expect(NumberOfEventsWrapper.find('.eventNumber').prop('value')).toBe(numofEvents);
      });

      test('change state when input changes', () => {
            NumberOfEventsWrapper.setState({
                  numOfEvents: '2'
            });
            const eventObject = { target: { value: '10' }};
            NumberOfEventsWrapper.find('.eventNumber').simulate('change', eventObject);
            expect(NumberOfEventsWrapper.state('numOfEvents')).toBe('10');
      });
});