import { createGlobalStyle } from "styled-components";
import { colors } from "./Variables";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'IBM Plex Sans', sans-serif;
        background-color: ${colors.mainBacground};
        color: ${colors.textColor};
    }
`;

export default GlobalStyle;
