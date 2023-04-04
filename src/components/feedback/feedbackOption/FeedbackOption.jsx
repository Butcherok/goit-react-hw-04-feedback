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
        const textBtn = option[0] + option.slice(1, option.length);

          return (
            <CounterItem key={option}>
              <CounterBtn type="button" onClick={() => onLeaveFeedback(option)}>
                {textBtn}
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
