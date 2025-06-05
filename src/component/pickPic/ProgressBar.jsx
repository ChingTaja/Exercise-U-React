import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemaingTime] = useState(timer);

  useEffect(() => {
    const internal = setInterval(() => setRemaingTime((preTime) => preTime - 10), 10);

    return () => {
      clearInterval(internal);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
