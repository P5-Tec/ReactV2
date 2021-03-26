import React from "react";
import "../styles/Header.css";
import DarkMode from "./DarkMode";
import { ReactComponent as LogoImg } from "../images/yb_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">
				<LogoImg id="logo" />
			</Link>

			<DarkMode />
		</header>
	);
};

export default Header;
