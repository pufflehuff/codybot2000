import React from 'react';
import PropTypes from 'prop-types';
import { useTimer } from 'react-timer-hook';

export default function Timer({ expiryTimestamp, setShowCountdown, expire }) {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    resume,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setShowCountdown(false);
      expire();
    },
  });

  return (
    <div>
      <div>
        <span>{hours}</span>
        :
        <span>{minutes}</span>
        :
        <span>{seconds}</span>
      </div>
      <button type="button" onClick={start}>Start</button>
      <button type="button" onClick={pause}>Pause</button>
      <button type="button" onClick={resume}>Resume</button>
      <button
        type="button"
        onClick={() => {
          setShowCountdown(false);
        }}
      >
        Restart

      </button>
    </div>
  );
}

Timer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
  setShowCountdown: PropTypes.func.isRequired,
  expire: PropTypes.func.isRequired,
};
