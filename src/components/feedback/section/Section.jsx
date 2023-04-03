import PropTypes from 'prop-types';
import { Feedback, FeedbackTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Feedback>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </Feedback>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};