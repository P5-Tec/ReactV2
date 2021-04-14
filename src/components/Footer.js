import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer>
			<span className="footerLink">
				<Link to="/terms-conditions">
					<p>
						<FormattedMessage id="footerText.txt1" />
					</p>
				</Link>

				<Link to="/privacy-policy">
					<p>
						<FormattedMessage id="footerText.txt2" />
					</p>
				</Link>
			</span>

			<span className="footerLink">
				<Link to="/contact">
					<p>
						<FormattedMessage id="footerText.txt3" />
					</p>
				</Link>

				<Link to="/help">
					<p>
						<FormattedMessage id="footerText.txt4" />
					</p>
				</Link>
			</span>
			<span id="spanLine">
				<p>Copyright © {new Date().getFullYear()}</p>
				<p>YouBank A/S</p>
			</span>
		</footer>
	);
};

export default injectIntl(Footer);
