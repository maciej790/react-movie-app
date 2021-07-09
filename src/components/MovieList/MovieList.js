import React from "react";
import useFetch from "../../use/useFetch";
import Loader from "../Loader/Loader";

function MovieList({ query }) {
  const { response, isLoading, isError } = useFetch(query);

  if (response?.Search && !isLoading && !isError) {
    return <h2>Results...</h2>;
  } else if (isLoading) {
    return <Loader />;
  } else {
    return <h2>{response?.Error}</h2>;
  }
}

export default MovieList;
