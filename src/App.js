import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./styles/App.css";

import { IntlProvider } from "react-intl";
import { flattenMessages } from "./utils";

import { useCookies } from "react-cookie";

import messages from "./messages";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/da";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Support from "./components/Support";

//Get the locale language for user
let locale = (navigator.languages && navigator.languages[0]) ||
	navigator.language ||
	navigator.userLanguage || ["en-US", "en"];

function App() {
	const location = useLocation();
	//Cookie state
	const [cokkies, setCookies] = useCookies(["language"]);
	//Language state - get from cookie or locale (if no cookie)
	const [language, setLanguage] = useState(cokkies.language || locale);

	return (
		<IntlProvider
			locale={locale}
			messages={flattenMessages(messages[language])}
		>
			<>
				<Header
					language={language}
					setLanguage={setLanguage}
					setCookies={setCookies}
				/>
				<Switch location={location} key={location.key}>
					<Route path="/" component={Home} exact />

					<Route path="/contact" component={Contact} />
					<Route path="/help" component={Support} />
				</Switch>
				<Footer />
			</>
		</IntlProvider>
	);
}

export default App;
