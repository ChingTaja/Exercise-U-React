import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChange }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    onChange(symbol, playerName)
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={ playerName } onChange={ handleChange } />
        ) : (
          <span className="player-name">{ playerName }</span>
        )}
        <span className="player-symbol">{ symbol }</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
