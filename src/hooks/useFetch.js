import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}. Cannot fetch articles.`);
      } else if (!response.ok) {
        throw new Error('Something has gone wrong, please try again.')
      }

      const data = await response.json();
      return data;
    }

    getData()
      .then(data => {
        if (isMounted) {
          setData(data);
          setError(null);
          setIsLoading(false);
        }
      })
      .catch(error => {
        setError(error.message);
        setData(null);
        setIsLoading(false);
      })

    return () => { isMounted = false };
  }, [url])

  return { data, isLoading, error };
}

export default useFetch;
