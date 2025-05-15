import { useImperativeHandle, useRef } from 'react';

export default function ResultModel({ ref, onReset, targetTime, remaining }) {
  let userLost = remaining <= 0;

  const formatRemaing = (remaining / 1000).toFixed(2);
  const dialog = useRef();
  const score = Math.round((1 - remaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with <strong>{formatRemaing} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>
  );
}
