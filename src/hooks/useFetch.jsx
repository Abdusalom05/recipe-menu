import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPedding, setIsPedding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDate = async () => {
      setIsPedding(true);
      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPedding(false);
        setError(null);
      } catch (err) {
        setIsPedding(false);
        setError(err.message);
      }
    };
    getDate();
  }, [url]);

  return { data, isPedding, error };
};
