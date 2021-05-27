import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    //background-color: #444;

    color: gray;

    //warning
    text-align:center;

}

html{
  background-color: #151515;
}

body html #root {
  max-height: 100vh;
  max-width: 100vw;

  width: 100%;
  height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

:root{
  --back: #151515;
  --primary: #ffd700;
  --secundary: #292929;
  --opasy: gray;
  --outline: #000000;

}

`;

