import React from "react";

import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/Login.css";

// Variants (Animation) for buttons:
// Makes button pulsate + text & border shadow infinitely while mouse hovers over
const buttonVarians = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255, 255, 255)",
		boxShadow: "0px 0px 8px #30d95d",
		transition: {
			duration: 0.3,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

// Variants (Animation) for header:
// Makes header pulsate infinitely with a little delay
const headingVariants = {
	animate: {
		scale: 1.1,
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatType: "mirror",
			delay: 1,
			repeatDelay: 2,
		},
	},
};

const Login = (props) => {
	const handleSubmit = () => {
		props.history.push("/");
	};

	return (
		<div className="container-fluid loginDiv">
			<motion.h1
				className="loginHeader"
				variants={headingVariants}
				animate="animate"
			>
				<FormattedMessage id="LoginPage.heading" />
			</motion.h1>

			<form className="login-form lgnForm" onSubmit={handleSubmit}>
				<div className="form-group formGrp">
					<label className="control-label">
						<FormattedMessage id="LoginPage.label1" />
					</label>
					<input className="form-control" />
				</div>
				<div className="form-group formGrp">
					<label className="control-label">
						<FormattedMessage id="LoginPage.label2" />
					</label>
					<input className="form-control" />
				</div>
				<div id="btnDivLogin" className="form-group">
					<motion.button
						className="btn-signup"
						variants={buttonVarians}
						whileHover="hover"
					>
						<FormattedMessage id="LoginPage.btn1" />
					</motion.button>
				</div>
			</form>

			<div className="row regLink">
				<p>
					<FormattedMessage id="LoginPage.link.p1" />
				</p>
				<Link to="/register">
					<FormattedMessage id="LoginPage.link.p2" />
				</Link>
			</div>
		</div>
	);
};

export default injectIntl(Login);
