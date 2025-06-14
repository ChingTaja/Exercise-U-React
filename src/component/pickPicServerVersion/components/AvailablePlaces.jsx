import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

async function fetchSortedPlace(params) {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);

      resolve(sortPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    error,
    isFetching,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlace, []);

  if (error) {
    return <ErrorPage message={error.message} title="An error occured" />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loadingText="Fetching place data..."
      isLoading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
