import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import SearchForm from "./components/SearchForm/SearchForm";
import { StyledWrapper } from "./style/StyledWrapper";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (value) => {
    setSearch(value);
  };

  return (
    <StyledWrapper>
      <GlobalStyle />
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
    </StyledWrapper>
  );
}

export default App;
