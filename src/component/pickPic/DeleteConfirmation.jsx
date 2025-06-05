import { useEffect, useState } from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER = 3000;
  const [remainingTime, setRemaingTime] = useState(TIMER);

  useEffect(() => {
    const internal = setInterval(() => setRemaingTime((preTime) => preTime - 10), 10);

    return () => {
      clearInterval(internal);
    };
  }, []);

  useEffect(() => {
    console.log('timer set');
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log('clear timer');
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
