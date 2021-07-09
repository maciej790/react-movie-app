import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieList from "./components/MovieList/MovieList";
import { StyledWrapper } from "./style/StyledWrapper";

function App() {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (value) => {
    if (value) {
      setQuery(
        `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${value}`
      );
    } else {
      return;
    }
  };

  return (
    <StyledWrapper>
      <GlobalStyle />
      <WelcomeText />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
      <MovieList query={query}/>
    </StyledWrapper>
  );
}

export default App;
