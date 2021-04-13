import React from "react";
import "../styles/Header.css";
import DarkMode from "./DarkMode";
import Language from "./Language";
import { ReactComponent as LogoImg } from "../images/yb_logo.svg";
import { Link } from "react-router-dom";

const Header = ({ language, setCookies }) => {
	return (
		<header>
			<Link to="/">
				<LogoImg id="logo" />
			</Link>

			<div>
				<DarkMode />
				<Language language={language} setCookies={setCookies} />
			</div>
		</header>
	);
};

export default Header;
