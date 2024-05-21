import { useEffect, useState } from "react";
import UseFetch from "../components/general/UseFetch";

const Dashboard = () => {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		(async () => {
			const { data, response } = await UseFetch({
				url: "auth/me",
				options: {
					method: "GET",
					useServerUrl: true,
					handleError: true,
					returnResponse: true,
				},
			});

			console.log(data);
			setUserData(data.data);
		})();
	});

	useEffect(() => {
		console.log(userData);
	}, [userData]);

	return <div>Dashboard</div>;
};

export default Dashboard;
