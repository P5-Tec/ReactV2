import React, { useState } from "react";
import "../styles/Header.css";
import Modal from "react-modal";
import DarkMode from "./DarkMode";
import Language from "./Language";
import { ReactComponent as LogoImg } from "../images/yb_logo.svg";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const customStyle = {
	content: {
		backgroundColor: "rgb(56, 56, 56)",
	},
};

const Header = ({ language, setLanguage, setCookies }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const burgerMenu = useMediaPredicate("(max-width: 570px)");
	const noMenu = useMediaPredicate("(min-width: 571px)");

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<header>
				<Link to="/">
					<LogoImg id="logo" />
				</Link>

				{burgerMenu && (
					<>
						<div id="menuIcon">
							{!menuOpen ? (
								<FontAwesomeIcon
									onClick={() => toggleMenu()}
									size="4x"
									icon={faBars}
									color={"white"}
									style={{ margin: "2rem" }}
								/>
							) : (
								<FontAwesomeIcon
									onClick={() => toggleMenu()}
									size="4x"
									icon={faTimes}
									color={"white"}
									style={{ margin: "2rem" }}
								/>
							)}
						</div>

						<Modal isOpen={menuOpen} preventScroll={true} style={customStyle}>
							<div className="modalMain">
								<div className="modalLinks">
									<Link>
										<p>Login</p>
									</Link>

									<Link>
										<p>Register</p>
									</Link>
								</div>

								<div className="modalToggles">
									<span>
										<DarkMode />
									</span>
									<span>
										<Language
											language={language}
											setLanguage={setLanguage}
											setCookies={setCookies}
										/>
									</span>
								</div>

								<div className="modalSocialLinks">
									<FontAwesomeIcon
										icon={faFacebook}
										size="3x"
										color={"white"}
									/>
									<FontAwesomeIcon icon={faTwitter} size="3x" color={"white"} />
									<FontAwesomeIcon
										icon={faInstagram}
										size="3x"
										color={"white"}
									/>
									<FontAwesomeIcon
										icon={faLinkedin}
										size="3x"
										color={"white"}
									/>
								</div>

								<div className="modalLastDiv">
									<p>YouBank A/S</p>
								</div>
							</div>
						</Modal>
					</>
				)}

				{noMenu && (
					<div className="headerContols">
						<div id="headerLinks">
							<Link>
								<p>Login</p>
							</Link>

							<Link>
								<p>Register</p>
							</Link>
						</div>

						<div className="headerToggles">
							<DarkMode />
							<Language
								language={language}
								setLanguage={setLanguage}
								setCookies={setCookies}
							/>
						</div>
					</div>
				)}
			</header>
		</>
	);
};

export default Header;
