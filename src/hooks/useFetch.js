import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setData(null);
        setIsLoading(false);
      })
  }, [url])

  return {data, isLoading, error};
}

export default useFetch;
