import React from "react";

import "animate.css/animate.min.css";

import GlobalStyles from "../../sass/GlobalStyles";

import Fonts from "../../assets/Fonts/Fonts";

const Layout = (content) => (
	<>
		<GlobalStyles />
		<Fonts />
		{content()}
	</>
);

export default Layout;
