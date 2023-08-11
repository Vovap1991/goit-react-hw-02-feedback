import { StatisticsWrapper, StatisticsItem, Clicks } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsWrapper>
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
