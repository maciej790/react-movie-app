import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import SearchForm from "./components/SearchForm/SearchForm";
import MovieList from "./components/MovieList/MovieList";
import { StyledWrapper } from "./style/StyledWrapper";
import { FirstView } from "./style/FirstView";

function App() {
  const [query, setQuery] = useState("");
  const [isTop, setIsTop] = useState(false);

  const handleSearchSubmit = (value) => {
    if (value) {
      setQuery(
        `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_API_KEY}&s=${value}`
      );
    } else {
      return;
    }
  };

  console.log(isTop);

  return (
    <StyledWrapper>
      <GlobalStyle />
      <FirstView isTop={isTop}>
        <WelcomeText />
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
        <MovieList query={query} isTop={isTop} setIsTop={setIsTop}/>
      </FirstView>
    </StyledWrapper>
  );
}

export default App;
