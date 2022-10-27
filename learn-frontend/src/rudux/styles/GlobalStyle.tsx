import {createGlobalStyle, css} from "styled-components";

interface GlobalStylesProps {
    themeIsDark: boolean
}

export const GlobalStyle = createGlobalStyle<GlobalStylesProps>`
  body {
    transition: background-color .5s;
  }

  ${props => props.themeIsDark ? css`
    body {
      background: #333333;
      color: white;
    }` : css`
    body {
      background: white;
    }`
  }
`