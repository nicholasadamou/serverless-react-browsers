import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
	  --white: #fafafa;
	  --black: #212121;
	  --red: #fc4349;
	  --grey: #f5f5f5;
	  --light-grey: #ccc;
	  --green: #10b500;
	  --yellow: #fff498;

	  --copy-size: 1rem;
	}

	* {
	  margin: 0;
	  padding: 0;
	}

	html {
	  overflow: auto;
	  height: auto;

	  background: none;
	}

	body {
	  font-family: "Roboto Slab", sans-serif;
	  color: var(--black);
	  font-size: var(--copy-size);

	  background: var(--white);
	}
`;

export default GlobalStyles;
