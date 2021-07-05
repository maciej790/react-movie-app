import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import SearchForm from "./components/SearchForm/SearchForm";
import { StyledWrapper } from "./style/StyledWrapper";
import UseFetch from "./use/UseFetch";

function App() {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (value) => {
    setQuery(
      `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${value}`
    );
  };

  const res = UseFetch(query);

  return (
    <StyledWrapper>
      <GlobalStyle />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </StyledWrapper>
  );
}

export default App;
