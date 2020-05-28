import React from "react";

import Website from "./components/Website/Website";

import styled from "styled-components";

const Sites = styled.div`
	display: -webkit-box;
	display: flex;
	flex-wrap: wrap;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;

	margin: 0 20px 4rem;

	max-width: 900px;
	margin: 0 auto;
`;

const getImageURL = (url, device = "desktop") => {
	let prefix = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.href.includes("localhost"))
		prefix = `${window.location.protocol}//${window.location.hostname}:8888`;

	return `${prefix}/.netlify/functions/website?url=${url}&device=${device}`;
};

const Websites = () => (
	<Sites>
		{Website(
			"GitHub",
			"https://github.com/",
			getImageURL("github.com"),
			getImageURL("github.com", "mobile")
		)}
		{Website(
			"StackOverFlow",
			"https://stackoverflow.com/",
			getImageURL("stackoverflow.com")
		)}
		{Website(
			"CodePen",
			"https://codepen.io/",
			getImageURL("codepen.io"),
			getImageURL("codepen.io", "mobile")
		)}
	</Sites>
);

export default Websites;
