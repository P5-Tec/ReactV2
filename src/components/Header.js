import React from "react";
import "../styles/Header.css";
import DarkMode from "./DarkMode";
import Language from "./Language";
import { ReactComponent as LogoImg } from "../images/yb_logo.svg";
import { Link } from "react-router-dom";

const Header = ({ language, setLanguage, setCookies }) => {
	return (
		<header>
			<Link to="/">
				<LogoImg id="logo" />
			</Link>

			<div>
				<DarkMode />
				<Language
					language={language}
					setLanguage={setLanguage}
					setCookies={setCookies}
				/>
			</div>
		</header>
	);
};

export default Header;
