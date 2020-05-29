import {useState, useEffect} from "react";

import { github } from '../utilities/utilities';

const useGitHub = (repositoryName) => {
	const [repository, setRepository] = useState({});

	useEffect(() => {
		function fetchRepository() {
			github
				.getRepo(github.__auth.username, repositoryName)
				.getDetails()
				.then((response) => {
					const {name, html_url} = response.data;

					setRepository({
						title: name.toLowerCase(),
						link: `${html_url}/blob/master/README.md`,
					});
				});
		}

		fetchRepository();
	}, [repositoryName, repository]);

	return repository;
};

export default useGitHub;
