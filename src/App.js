import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { flattenMessages } from "./utils";
import "./styles/App.css";

import messages from "./messages";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/da";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

let locale = (navigator.languages && navigator.languages[0]) ||
	navigator.language ||
	navigator.userLanguage || ["en-US", "en"];

function App() {
	const location = useLocation();
	const [language, setLanguage] = useState(locale);

	return (
		<IntlProvider
			locale={locale}
			messages={flattenMessages(messages[language])}
		>
			<>
				<Header language={language} setLanguage={setLanguage} />
				<Switch location={location} key={location.key}>
					<Route path="/" component={Home} exact />

					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer />
			</>
		</IntlProvider>
	);
}

export default App;
