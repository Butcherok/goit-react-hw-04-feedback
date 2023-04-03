import PropTypes from 'prop-types';
import {
  Counter,
  CounterList,
  CounterItem,
  CounterBtn,
} from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Counter>
      <CounterList>
        {options.map(option => {
          return (
            <CounterItem key={option}>
              <CounterBtn
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </CounterBtn>
            </CounterItem>
          );
        })}
      </CounterList>
    </Counter>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
