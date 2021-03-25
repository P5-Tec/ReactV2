import React from "react";
import "../styles/Header.css";
import DarkMode from "./DarkMode";

const Header = () => {
	return (
		<header>
			<h1>YouBank</h1>
			<DarkMode />
		</header>
	);
};

export default Header;
