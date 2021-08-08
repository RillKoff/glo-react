import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inerhit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3{
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    font-familt: inherit;
  }
`;