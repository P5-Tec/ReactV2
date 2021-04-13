import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>

			<h3>
				<FormattedMessage id="detail.welcome" />
			</h3>

			<Link to="/contact">
				<button>Contact</button>
			</Link>
		</div>
	);
};

export default injectIntl(Home);
