import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
	<React.StrictMode>
		<CookiesProvider>
			<Router>
				<App />
			</Router>
		</CookiesProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
