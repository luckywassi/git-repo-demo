import { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    if (!uri) {
      try {
        throw 'No uri provided to useFetch hook';
      } catch (err) {
        setError(err);
      }
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const response = await fetch(uri);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, [uri]);

  return { loading, error, data };
}
