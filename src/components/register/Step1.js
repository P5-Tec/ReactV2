import React, { useState } from "react";

import { FormattedMessage, injectIntl } from "react-intl";
import DatePicker from "react-date-picker";
import * as moment from "moment";
import { motion } from "framer-motion";

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

function Step1(props) {
	//State hook for user birthday
	const [birthday, setBirthday] = useState(props.getState("birthday"));

	//Method to update user birthday on change and set it to props state with wanted format
	//and update state
	const updateBirthday = (value) => {
		props.setState("birthday", moment(value, "dd-MM-yyyy").format());
		setBirthday(value);
	};

	return (
		<motion.div
			className="container-fluid form"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<span className="row formRow">
				<p className="col-lg-4 label">
					<FormattedMessage id="RegisterPage.txt1" />
				</p>
				<input
					className="col-lg-8 formInput"
					placeholder="Fx. Max Mustermann"
					name="name"
					value={props.getState("name", "")}
					onChange={props.handleChange}
				/>
			</span>

			<span className="row formRow">
				<p className="col-lg-4 label">
					<FormattedMessage id="RegisterPage.txt2" />
				</p>
				<span className="col-lg-8 formInput">
					<DatePicker
						id="birthdayPicker"
						onChange={(value) => updateBirthday(value)}
						value={birthday}
						format={"dd-MM-yyyy"}
						maxDate={new Date()}
						minDate={new Date("1901-01-01")}
						clearIcon={null}
					/>
				</span>
			</span>

			<div className="row btnRow">
				<div className="col-6"></div>
				<div className="col-6">
					<button
						className="navBtn"
						disabled={
							!props.getState("name") ||
							!props.getState("name").match(/^[a-zA-Z\s]{3,}$/) ||
							!props.getState("birthday")
						}
						onClick={props.next}
					>
						<FormattedMessage id="RegisterPage.btn2" />
					</button>
				</div>
			</div>
		</motion.div>
	);
}

export default injectIntl(Step1);
