import React from "react";
import { Welcome, H1, P, Span } from "./StyledWelocmeText";

function WelcomeText() {
  return (
    <Welcome>
      <H1>
        <Span>Search</Span> Movie App
      </H1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan
        ipsum vitae leo sodales tempus. Donec non dui elementum, luctus nisi ac,
        volutpat massa. Duis ex felis, fermentum ut ligula porta, viverra
        convallis nibh.
      </P>
    </Welcome>
  );
}

export default WelcomeText;
