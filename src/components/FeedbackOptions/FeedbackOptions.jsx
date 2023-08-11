import { FeedbackBtn, FeedbackWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <FeedbackWrapper>
      <FeedbackBtn onClick={() => onLeaveFeedback(good)}>Good</FeedbackBtn>
      <FeedbackBtn onClick={() => onLeaveFeedback(neutral)}>
        Neutral
      </FeedbackBtn>
      <FeedbackBtn onClick={() => onLeaveFeedback(bad)}>Bad</FeedbackBtn>
    </FeedbackWrapper>
  );
};
