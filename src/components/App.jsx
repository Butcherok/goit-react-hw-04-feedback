import React, { Component } from 'react';
import { FeedbackOptions } from './feedback/feedbackOption/FeedbackOption';
import { Notification } from './feedback/notification/Notification';
import { Section } from './feedback/section/Section';
import { Statistics } from './feedback/statistics/Statistics';
import { Container } from './App.styles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSendFeedback = option =>
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.floor((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onSendFeedback}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
