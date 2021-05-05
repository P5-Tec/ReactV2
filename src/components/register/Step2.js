import React from "react";

import { motion } from "framer-motion";
import { FormattedMessage, injectIntl } from "react-intl";

// Variants (Animation) for div element:
// Makes div fly in from right (with little spring bounce)
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

function Step2(props) {
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
						<FormattedMessage id="RegisterPage.txt3" />
					</p>
					<input
						className="col-lg-8 formInput"
						placeholder="Fx. 22332100"
						name="phone"
						value={props.getState("phone", "")}
						onChange={props.handleChange}
					/>
				</span>

				<span className="row formRow">
					<p className="col-lg-4 label">
						<FormattedMessage id="RegisterPage.txt4" />
					</p>
					<span className="col-lg-8 formInput">
						<input
							className="col-lg-9 formInput"
							placeholder="Fx. Irlandsvej 2 1.th"
							name="address"
							value={props.getState("address", "")}
							onChange={props.handleChange}
						/>
						<input
							className="col-lg-3 formInput"
							placeholder="Fx. 2300 København S"
							name="zip"
							value={props.getState("zip", "")}
							onChange={props.handleChange}
						/>
					</span>
				</span>
			</motion.div>

			<motion.div
				className="container-fluid"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div className="row btnRow">
					<div className="col-6">
						<button className="navBtn" onClick={props.prev}>
							<FormattedMessage id="RegisterPage.btn1" />
						</button>
					</div>
					<div className="col-6">
						<button
							className="navBtn"
							disabled={
								!props.getState("phone") ||
								!props
									.getState("phone")
									.match(/^[\+]?[(]?[0-9]{3}[-\s\.]?[0-9]{5,8}$/) ||
								!props.getState("address") ||
								!props.getState("zip")
							}
							onClick={props.next}
						>
							<FormattedMessage id="RegisterPage.btn2" />
						</button>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default injectIntl(Step2);
