import React, { Component } from 'react';

import { FeedbackWrapper, FeedbackTitle, FeedbackBtn } from './Feedback.styled';

export const Feedback = ({ onIncrement }) => {
  return (
    <FeedbackWrapper>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <FeedbackBtn onClick={() => onIncrement('good')}>Good</FeedbackBtn>
      <FeedbackBtn onClick={() => onIncrement('neutral')}>Neutral</FeedbackBtn>
      <FeedbackBtn onClick={() => onIncrement('bad')}>Bad</FeedbackBtn>
    </FeedbackWrapper>
  );
};
