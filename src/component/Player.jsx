import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);
  const edit = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (event) => {
    console.log(event);
    setPlayerName(event);
  };
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={edit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
