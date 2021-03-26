import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer>
			<span>
				<p className="footerLink">Terms & Conditions</p>
				<p className="footerLink">Privacy policy</p>
			</span>
			<span>
				<Link to="/contact">
					<p className="footerLink">Contact</p>
				</Link>

				<p className="footerLink">Support / FAQ</p>
			</span>
			<span id="spanLine">
				<p>Copyright © {new Date().getFullYear()}</p>
				<p>YouBank A/S</p>
			</span>
		</footer>
	);
};

export default Footer;
