import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Times, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    height: 100%;
    width: 100%;
  }
  
  #app > div {
    height: 100%;
    width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  
  ul {
    padding-left: 10px;
  }
  
  svg {
    overflow: visible !important;
  }
`;
