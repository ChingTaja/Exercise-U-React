import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('timeout');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('interval');
    const timer = setInterval(() => {
      setRemainingTime((preRemainingTime) => preRemainingTime - 100);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <progress id="quetion-time" max={timeout} value={remainingTime}></progress>;
}
