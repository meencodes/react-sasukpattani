import { createGlobalStyle } from 'styled-components';
import Myfont from '../fonts/AmeenDev.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: AmeenDev;
      src: url(${Myfont});
  }
`
export default GlobalStyle;