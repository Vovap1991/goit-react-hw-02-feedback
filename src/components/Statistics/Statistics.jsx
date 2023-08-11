import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsItem,
  Clicks,
} from './Statistics.styled';

export const Statistics = ({ clicks, total, positivePercentage }) => {
  const { good, neutral, bad } = clicks;
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsItem>
        Good:
        <Clicks>{good}</Clicks>
      </StatisticsItem>
      <StatisticsItem>
        Neutral:
        <Clicks>{neutral}</Clicks>
      </StatisticsItem>
      <StatisticsItem>
        Bad:
        <Clicks>{bad}</Clicks>
      </StatisticsItem>
      <StatisticsItem>
        Total:
        <Clicks>{total}</Clicks>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback:
        <Clicks>{positivePercentage}%</Clicks>
      </StatisticsItem>
    </StatisticsWrapper>
  );
};
