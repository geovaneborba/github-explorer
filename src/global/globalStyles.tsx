import { createGlobalStyle } from 'styled-components'
import githubBackground from '../assets/github-background.svg'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url(${githubBackground}) no-repeat 70% top;
    background-color: #f0f0f5;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 60rem;
    max-width: 60rem;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }
`
export default GlobalStyle
