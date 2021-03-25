import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
	const location = useLocation();

	return (
		<>
			<Header />
			<Switch location={location} key={location.key}>
				<Route path="/" component={Home} exact />

				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
