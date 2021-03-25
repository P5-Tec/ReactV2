import React from "react";
import "../styles/Header.css";
import DarkMode from "./DarkMode";
import { ReactComponent as LogoImg } from "../images/yb_logo.svg";

const Header = () => {
	return (
		<header>
			<LogoImg id="logo" />
			<DarkMode />
		</header>
	);
};

export default Header;
