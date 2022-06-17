import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --lightBleu:#A8DADC;
    --lighterBleu:rgb(182, 224, 226);
    --medBleu:#457B9D;
    --thirdColor:#795663;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --transition: all 0.3s linear;
    --gap: 60px;
    --right-left-margin:20%;
  }`;
