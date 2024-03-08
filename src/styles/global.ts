import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    // Default: will be removed in Forced Color Modes
    box-shadow: 0 0 0 1px ${(props) => props.theme['blue']};
    // Fallback: will be visible with custom system colors in Forced Color Modes
    outline: 1px solid transparent;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  // SR only
  .visually-hidden {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }
`
