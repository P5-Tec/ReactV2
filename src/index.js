import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { CookiesProvider } from "react-cookie";
import ScrollToTop from "./components/helpers/ScrollToTop";

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<Router history={history}>
				<ScrollToTop />
				<App />
			</Router>
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
