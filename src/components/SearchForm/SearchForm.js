import React, { useState } from "react";
import { StyledForm, FormInput, FormSubmit } from "./StyledSearchForm";

function SearchForm({ handleSearchSubmit }) {
  const [inputValue, setinputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(inputValue);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormInput
        type="text"
        name="search"
        placeholder="e.g. Batman"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <FormSubmit type="submit">Search</FormSubmit>
    </StyledForm>
  );
}

export default SearchForm;
