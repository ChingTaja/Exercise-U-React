import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [fetchedData, setFetchedData] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data' });
      }
      setIsFetching(false);
    }

    fetchData();
  }, [useFetch]);

  return {
    error,
    isFetching,
    fetchedData,
    setFetchedData,
  };
}
