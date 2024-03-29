import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;


export const Timer = () => {
  const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = startTime + 600; // use UNIX timestamp in seconds

  const remainingTime = endTime - startTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div>
      {/* <CountdownCircleTimer
        {...timerProps}
        colors={[['#7E2E84']]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#D14081']]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('hours', getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer> */}
      <div className="inline-block">
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#EF798A']]}
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
      <div className="inline-block">
        <CountdownCircleTimer
          {...timerProps}
          colors={[['#218380']]}
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0,
          ]}
        >
          {({ elapsedTime }) =>
            renderTime('seconds', getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
    </div>
  );
};
