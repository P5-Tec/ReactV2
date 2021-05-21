import React from "react";
import { Router, Switch, Route, useLocation } from "react-router-dom";

import Overview from "./Overview";
import Accounts from "./Accounts";
import Profile from "./Profile";

// const history = createBrowserHistory();

const Browse = ({ history }) => {
	const location = useLocation();
	return (
		<Router location={location} key={location.key} history={history}>
			<Switch>
				<Route path="/browse" component={Overview} exact />
				<Route path="/browse/accounts" component={Accounts} />
				<Route path="/browse/profile" component={Profile} />
			</Switch>
		</Router>
	);
};

export default Browse;
