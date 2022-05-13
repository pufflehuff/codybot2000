import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

export default function SetTimer({ expire }) {
  // default timer is set to 5
  const [time, setTime] = useState(new Date());
  const [showConutdown, setShowCountdown] = useState(false);
  return (
    <div className="PromptTimer">
      {showConutdown
        ? <Timer expiryTimestamp={time} setShowCountdown={setShowCountdown} expire={expire} />
        : (
          <>
            <label htmlFor="settingTimer">
              Set timer
              <input
                type="number"
                onChange={(event) => {
                  const min = Number(event.target.value);
                  const newTime = new Date();
                  newTime.setSeconds(newTime.getSeconds() + min * 60);
                  setTime(newTime);
                }}
              />
            </label>
            <button type="button" onClick={() => setShowCountdown(true)}> Start </button>
          </>
        )}
    </div>
  );
}
SetTimer.propTypes = {
  expire: PropTypes.func.isRequired,
};
