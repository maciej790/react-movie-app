import { useState, useEffect } from "react";

const UseFetch = (query) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const doRequest = async () => {
        const response = await fetch(query);
        const data = await response.json();
        console.log(data);
    };
    doRequest();
  }, [query]);

  return {
    response,
    loading,
    error,
  };
};

export default UseFetch;
