import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    body{
        color: ${(props) => props.theme.colors.text};
    }
`