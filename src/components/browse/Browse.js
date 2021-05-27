import React, { useState, useEffect } from "react";
import { Router, Switch, Route, useLocation } from "react-router-dom";

import { useCookies } from "react-cookie";

import Overview from "./Overview";
import Profile from "./Profile";

const Browse = ({ history }) => {
	//Cookie state
	const [cookies] = useCookies(["login"]);
	const [userData, setUserData] = useState([{}]);
	const [userAccount, setUserAccount] = useState([{}]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		await fetch(
			"http://api.saxproduction.dk/api/Customers/" + cookies.CustomerID,
			{
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		)
			.then((response) => {
				response.json().then(function (data) {
					setUserData(data);
					setUserAccount(data.accounts);
				});
			})
			.catch((error) => console.log(error));
	};

	const location = useLocation();
	return (
		<Router location={location} key={location.key} history={history}>
			<Switch>
				<Route
					path="/browse"
					render={() => <Overview userAccount={userAccount} />}
					exact
				/>
				<Route
					path="/browse/profile"
					render={() => <Profile userData={userData} />}
				/>
			</Switch>
		</Router>
	);
};

export default Browse;
