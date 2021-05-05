import React, { useState } from "react";
import ReactPasswordStrength from "react-password-strength";
import { motion } from "framer-motion";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";

// Variants (Animation) for div element:
// Makes div fly in from right (with little spring bounce at the end)
const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
		},
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};

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

function FinalStep(props) {
	//State hook for user password
	const [pass, setPass] = useState({});
	//State hook for checkbox state
	const [checked, setChecked] = useState(false);

	const createUser = () => {
		console.log(
			props.state.birthday,
			props.state.name,
			props.state.phone,
			props.state.address,
			props.state.zip,
			props.state.email,
			pass.password,
			pass.score,
			checked
		);
	};

	return (
		<>
			<motion.div
				className="container-fluid form"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<span className="row formRow">
					<p className="col-lg-4 label">
						<FormattedMessage id="RegisterPage.txt5" />
					</p>
					<input
						className="col-lg-8 formInput"
						placeholder="Fx. max07@gmail.com"
						name="email"
						type="email"
						value={props.getState("email", "")}
						onChange={props.handleChange}
					/>
				</span>

				<span className="row formRow">
					<p className="col-lg-4 label">
						<FormattedMessage id="RegisterPage.txt6" />
					</p>
					<ReactPasswordStrength
						className="col-lg-8 formInput"
						style={{
							padding: "0",
							height: "100%",
							width: "100%",
							border: "none",
						}}
						minLength={6}
						minScore={2}
						changeCallback={setPass}
						scoreWords={[
							<FormattedMessage id="RegisterPage.passErr.e1" />,
							<FormattedMessage id="RegisterPage.passErr.e2" />,
							<FormattedMessage id="RegisterPage.passErr.e3" />,
							<FormattedMessage id="RegisterPage.passErr.e4" />,
							<FormattedMessage id="RegisterPage.passErr.e5" />,
						]}
						tooShortWord={<FormattedMessage id="RegisterPage.passErr.e0" />}
						inputProps={{
							name: "password",
							autoComplete: "off",
							className: "formInput",
						}}
					/>
				</span>
				<span className="row formRow" id="checkSpan">
					<input
						type="checkbox"
						defaultChecked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<p>
						<FormattedMessage id="RegisterPage.link.pt1" />{" "}
						<Link to="/terms-conditions" target="_blank">
							<FormattedMessage id="RegisterPage.link.pt2" />
						</Link>{" "}
						&{" "}
						<Link to="privacy-policy" target="_blank">
							<FormattedMessage id="RegisterPage.link.pt3" />
						</Link>
					</p>
				</span>
			</motion.div>

			<motion.div
				className="row btnRow"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div className="col-6">
					<button className="navBtn" onClick={props.prev}>
						<FormattedMessage id="RegisterPage.btn1" />
					</button>
				</div>
				<div className="col-6">
					<motion.button
						className="createBtn"
						variants={buttonVarians}
						whileHover="hover"
						whileTap="hover"
						disabled={
							!props.getState("email") ||
							!props
								.getState("email")
								.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/) ||
							!pass.score ||
							!pass.score == 1 ||
							!checked
						}
						onClick={createUser}
					>
						<FormattedMessage id="RegisterPage.btn3" />
					</motion.button>
				</div>
			</motion.div>
		</>
	);
}

export default injectIntl(FinalStep);
