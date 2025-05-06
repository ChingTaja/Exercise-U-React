import { useRef, useState } from 'react';

export default function Player() {
  const name = useRef();
  const [player, setPlayer] = useState();
  const handleClick = () => {
    setPlayer(name.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {player ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={name} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
