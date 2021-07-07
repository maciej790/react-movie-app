import { useState, useEffect } from "react";

const UseFetch = (query) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const doRequest = async () => {
      try {
        setIsLoading(true);
        setIsError(undefined);
        setResponse(undefined);
        const response = await fetch(query);
        const data = await response.json();
        setResponse(data);
      } catch (err) {
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };
    doRequest();
  }, [query]);

  return {
    response,
    isLoading,
    isError,
  };
};

export default UseFetch;
