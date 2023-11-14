import { createGlobalStyle } from 'styled-components'
import { black9, gray7, white9 } from '~/presentation/themes/config'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: none;
    border: none;
    list-style: none;

    font-family: 'Poppins', 'Roboto', Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    color: ${ black9 }
  }

  button: { cursor: pointer; }

  html {
    scroll-behavior: smooth;
    background: ${ white9 };

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  &::-webkit-scrollbar {
    width: 6px;
    background: ${ gray7 }
  }
  &::-webkit-scrollbar-track {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background: ${ black9 }
  }
`