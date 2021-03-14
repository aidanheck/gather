import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<NumberOfEvents /> component', () => {
      let NumberOfEventsWrapper;
      beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      });
    
      test('renders text input', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
      });

      test('renders number input correctly', () => {
       const eventNum = NumberOfEventsWrapper.instance().state
            .numberOfEvents;
          expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(eventNum);
      });

      test('should change state when input changes', () => {
            const eventObject = { target: { value: '1' } };
            NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('1');
          });

      test('number input should render numberOfEvents as its value correctly', () => {
            const numberOfEvents = NumberOfEventsWrapper.instance().state
              .numberOfEvents;
            expect(NumberOfEventsWrapper.find('.number').prop('value')).toEqual(
              numberOfEvents
            );
          });
    });
