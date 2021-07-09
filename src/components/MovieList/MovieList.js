import React, { useEffect } from "react";
import useFetch from "../../use/useFetch";
import Loader from "../Loader/Loader";

function MovieList({ query, setIsTop }) {
  const { response, isLoading, isError } = useFetch(query);

  useEffect(() => {
    if (response?.Search) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, [response, setIsTop]);

  if (response?.Search && !isLoading && !isError) {
    return <h2>Results...</h2>;
  }
  if (isLoading) {
    return <Loader />;
  }
  return <h2>{response?.Error}</h2>;
}

export default MovieList;
