import React from "react";
import useFetch from "../../use/useFetch";

function MovieList({ query }) {
  const { response, isLoading, isError } = useFetch(query);

  if (response?.Search && !isLoading && !isError) {
    return <h2>Results...</h2>;
  } else {
    return <h2>{response?.Error}</h2>;
  }
}

export default MovieList;
