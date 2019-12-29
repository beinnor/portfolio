import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
/* Minimal CSS Reset */

  html {
  box-sizing: border-box;
  font-size: 12px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* Typography */

html {
	font-family: 'Roboto', sans-serif;
}

@media (min-width: 576px) {
	html {
		font-size: 14px;
	}
}

@media (min-width: 768px) {
	html {
		font-size: 16px;
	}
}

@media (min-width: 992px) {
	html {
		font-size: 18px;
	}
}

@media (min-width: 1200px) {
	html {
		font-size: 20px;
	}
}

/* Custom Styles */

main {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	justify-content: center;
	padding: 0 30px;
	text-align: center;
}

main > .intro {
	font-family: 'Reem Kufi', sans-serif;
	font-size: 3.75em;
	font-weight: 600;
}

main > .tagline {
	font-size: 1.5rem;
	margin: 1.5rem 0;
	font-weight: 100;
}

svg {
	margin-bottom: -0.20rem;
	margin-left: 0.675rem;;
	width: 3rem;
  height: 3rem;
  padding: 10px;
}

/* Theme */

main {
	background: #485564;
	color: #FAFAFA;
}

.icons-social a {
	color: #FAFAFA;
}

.icons-social a svg path{
	fill: #FAFAFA;
}
`;
