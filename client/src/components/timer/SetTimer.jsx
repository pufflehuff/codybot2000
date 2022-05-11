import React, { useState } from 'react';
import Timer from './Timer';

export default function SetTimer() {
  // default timer is set to 5
  const [time, setTime] = useState(new Date());
  const [showConutdown, setShowCountdown] = useState(false);
  return (
    <div>
      {showConutdown
        ? <Timer expiryTimestamp={time} setShowCountdown={setShowCountdown} />
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
            <button type="button" onClick={() => setShowCountdown(true)}> start </button>
          </>
        )}
    </div>
  );
}
