import { useState } from 'react';

export default function TimeChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = () => {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, 1000 * targetTime);
  };

  const handleStop = () => {};

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p> You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
      </p>
      <p className={setTimerStarted ? 'active' : undefined}>
        {setTimerStarted ? 'Timer is running' : 'Timer inactive'}
      </p>
    </section>
  );
}
