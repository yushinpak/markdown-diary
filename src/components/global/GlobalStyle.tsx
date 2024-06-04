import { createGlobalStyle } from "styled-components";
import React from "react";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

:root {
  --font-size-sm1: 0.5rem; 
  --font-size-sm2: 0.9rem; 
  --font-size-md1: 1rem; //16
  --font-size-md2: 1.3rem;
  --font-size-hd1: 1.5rem; 
  --font-size-hd2: 2.0rem; 
  --font-size-hd3: 2.8rem; 

  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500; 
  --font-weight-regular: 400; 

  --color-white: white;
  --color-text: black;
  --color-point: #F38996;
  --color-postbox: #FDFDF0;
  --color-logo: #FDFDF0; // 흰색으로 변경될 가능성 있음
  --color-scrollbar: grey;

  --line-height-default: 1.7;
  
}

::-webkit-scrollbar {
  width: 12px; /* 스크롤바 넓이 */
}

::-webkit-scrollbar-thumb {
  background: #F38996; /* 스크롤바 색상 설정 */
}

@font-face {
  font-family: "Gothic A1";
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/GothicA1-Light.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'YESMyoungjo-Regular';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_13@1.0/YESMyoungjo-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html, body, #root {
  width: 100%;
  height: auto;
  font-family: 'Gothic A1', 'YESMyoungjo-Regular', sans-serif;
  margin: 0;
  padding: 0;
  color: black;
}
`;

const Global: React.FC = () => {
  return <GlobalStyle />;
};

export default Global;
