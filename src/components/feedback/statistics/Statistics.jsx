import PropTypes from 'prop-types';
import {
  Stats,
  StatsList,
  StatsItem,
  StatsText,
  StatsTitle,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <StatsTitle>Statistics</StatsTitle>
      <StatsList>
        <StatsItem>
          <StatsText>Good: {good}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Neutral: {neutral}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Bad: {bad}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Total: {total}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Positive feedback: {positivePercentage}%</StatsText>
        </StatsItem>
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
