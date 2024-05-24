import { createGlobalStyle } from "styled-components";
import React from "react";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

:root {
  --font-size-sm-1: 1rem; //이거 폰트 몇임..?
  --font-size-sm-2: 1rem; //이거 폰트 몇임..?
  --font-size-md: 1rem;
  --font-size-hd: 1rem; 
  --font-size-title: 1rem;

  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500; 
  --font-weight-regular: 400; 

  --color-white: white;
  --color-text: black;
  --color-point: #F38996;
  --color-postbox: #FDFDF0;
  --color-logo: #FDFDF0;
  // --color-logo: #FDFDF0; // 흰색으로 변경될 가능성 있음
  --color-scrollbar: grey;
}

::-webkit-scrollbar {
  width: 15px; /* 스크롤바 넓이 */
}

::-webkit-scrollbar-thumb {
  background: var(--default-scrollbar-color); /* 스크롤바 색상 설정 */
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
