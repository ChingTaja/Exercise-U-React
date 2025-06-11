import Places from './Places.jsx';
import { useState, useEffect } from 'react';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(
    fetch('http://localhost:3000/places')
      .then((respsonse) => {
        return respsonse.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      }),
    []
  );

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
