import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { motion } from "framer-motion";
import Modal from "react-modal";

import "../styles/Header.css";

import DarkMode from "./DarkMode";
import Language from "./Language";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//Custom style for background - used in modal
const customStyle = {
	content: {
		backgroundColor: "rgb(56, 56, 56)",
	},
};

// Variants (Animation) for svg - logo icons:
// Change opacity from  0 to 1 - show element, in 1 second
const svgVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

// Variants (Animation) for svg - logo border:
// Rotates it around for 3 seconds after logo is shown
const pathVariants = {
	hidden: {
		rotate: -360,
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		rotate: 0,
		opacity: 1,
		pathLength: 1,
		transition: {
			delay: 1,
			duration: 3,
			ease: "easeInOut",
		},
	},
};

const Header = ({ language, setLanguage, setCookies }) => {
	//State hook used to toggle modal - boolean
	const [menuOpen, setMenuOpen] = useState(false);

	//Media queries for displaying burger menu if screen width 570 or smaller
	const burgerMenu = useMediaPredicate("(max-width: 570px)");
	//Media queries for hidding burger menu if screen width 571 or bigger
	const noMenu = useMediaPredicate("(min-width: 571px)");

	//Method for toggling (updating) state boolean value
	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<header>
				<Link to="/">
					<motion.svg
						id="logo"
						xmlns="http://www.w3.org/2000/svg"
						width="100"
						height="100"
						viewBox="0 0 230 230"
						variants={svgVariants}
						initial="hidden"
						animate="visible"
					>
						<g fill="none">
							<path d="M0,0H230V230H0Z" stroke="none" />
							<motion.path
								d="M 7 7 L 7 223 L 223 223 L 223 7 L 7 7 M 0 0 L 230 0 L 230 230 L 0 230 L 0 0 Z"
								stroke="none"
								fill="#30d95d"
								variants={pathVariants}
							/>
						</g>
						<text
							transform="translate(60 217)"
							fontSize="55"
							fontFamily="SegoeUI, Segoe UI"
							fill="white"
						>
							<tspan x="-50" y="-10">
								YouBank
							</tspan>
						</text>
						<g transform="translate(-1427.255 -1179.375)">
							<path
								d="M0,0H29.107"
								transform="translate(1588.755 1318.768) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H38.213"
								transform="translate(1595.308 1323.322) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H47.32"
								transform="translate(1602.862 1327.875) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H38.213"
								transform="translate(1609.415 1323.322) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H29.107"
								transform="translate(1616.968 1318.768) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H47.32"
								transform="translate(1623.522 1327.875) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H38.213"
								transform="translate(1630.075 1323.322) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
							<path
								d="M0,0H29.107"
								transform="translate(1637.628 1318.768) rotate(-90)"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
							/>
						</g>
					</motion.svg>
				</Link>

				{/* If media queries for burgerMenu is active (width 570 or smaller) show this element + modal (if active) */}
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

						{/* Show modal if menuOpen state hook is true */}
						<Modal
							isOpen={menuOpen}
							preventScroll={true}
							style={customStyle}
							closeTimeoutMS={500}
						>
							<div className="modalMain">
								<div className="modalLinks">
									<Link to="/login">
										<p>Login</p>
									</Link>

									<Link to="/register">
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

				{/* If media queries for burgerMenu is inactive (width 571 or bigger) show this div */}
				{noMenu && (
					<div className="headerContols">
						<div id="headerLinks">
							<Link to="/login">
								<p>Login</p>
							</Link>

							<Link to="/register">
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
