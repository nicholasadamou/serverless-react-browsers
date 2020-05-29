import GitHub from "github-api";

export const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

export const github = new GitHub({
	username: "nicholasadamou",
	token: process.env.REACT_APP_GITHUB_TOKEN,
  });

export const getImageURL = (url, device = "desktop") => {
	let prefix = `${window.location.protocol}//${window.location.hostname}`;

	if (window.location.href.includes("localhost"))
		prefix = `${window.location.protocol}//${window.location.hostname}:8888`;

	if (url.includes('http://') || url.includes('https://') || url.includes('www.')) {
		url = url.replace('http://', '').replace('https://', '').replace('www.', '');
	}

	return `${prefix}/.netlify/functions/website?url=${url}&device=${device}`;
};

  export default {
	isMobile,
	github,
	getImageURL
  };
