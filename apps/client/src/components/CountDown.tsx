import FlipCountdown from '@rumess/react-flip-countdown';
import { CountDown as Constants } from '../constants';

export const CountDown = () => {
  return (
    <FlipCountdown
      endAtZero
      hideYear
      monthTitle={Constants.MONTH_TITLE}
      dayTitle={Constants.DAY_TITLE}
      hourTitle={Constants.HOUR_TITLE}
      minuteTitle={Constants.MINUTE_TITLE}
      secondTitle={Constants.SECOND_TITLE}
      theme={Constants.THEME}
      size={Constants.SIZE}
      endAt={Constants.END_AT}
    />
  );
};
