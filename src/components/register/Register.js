import React from "react";

import { FormattedMessage, injectIntl } from "react-intl";
import { Steps, Step } from "react-step-builder";
import { motion } from "framer-motion";

import "../../styles/Register.css";

import Step1 from "./Step1";
import Step2 from "./Step2";
import FinalStep from "./FinalStep";

import { headingVariants } from "../helpers/Variants";

const Register = () => {
	const config = {
		navigation: {
			location: "after",
		},
	};

	return (
		<div className="container-fluid regMainDiv">
			<motion.h1 variants={headingVariants} animate="animate">
				<FormattedMessage id="RegisterPage.heading" />
			</motion.h1>

			<p id="underTxt">
				<FormattedMessage id="RegisterPage.headTxt" />
			</p>

			<Steps config={config}>
				<Step component={Step1} />
				<Step component={Step2} />
				<Step component={FinalStep} />
			</Steps>
		</div>
	);
};

export default injectIntl(Register);
