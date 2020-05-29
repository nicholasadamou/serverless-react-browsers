import React from "react";

import Website, { GitHubProject } from "./components/Website/Website";

import styled from "styled-components";

import { getImageURL } from '../../utilities/utilities';

const Sites = styled.div`
	display: -webkit-box;
	display: flex;
	flex-wrap: wrap;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;

	margin: 0 20px 4rem;

	max-width: 1280px;
	margin: 0 auto;
`;

const Websites = () => (
	<Sites>
		{GitHubProject('serverless-react-browsers')}
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
