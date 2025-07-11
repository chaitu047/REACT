import { useState, useEffect } from "react";

export function useFetch(URL, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    setLoading(true);
    setError(false);

    fetch(URL, options)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then((json) => {
        if (!ignore) setData(json);
      })
      .catch(() => {
        if (!ignore) setError(true);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [URL, JSON.stringify(options)]); // stringifying options for dependency comparison

  return { data, loading, error };
}
