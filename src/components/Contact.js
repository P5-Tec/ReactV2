import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { motion } from "framer-motion";

import "../styles/Contact.css";

import SupportImg from "../images/support.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCommentDots,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

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

const Contact = () => {
	return (
		<motion.div
			className="container-fluid mainDiv"
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="row contactSection">
				<img
					src={SupportImg}
					alt="Support"
					className="col-lg-6 order-lg-2 sectionImg"
				/>
				<span className="col-lg-6 order-lg-1">
					<h2>
						<FormattedMessage id="contactPage.firstSection.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.firstSection.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.firstSection.p2" />
					</p>
					<Link to="/help">
						<motion.button variants={buttonVarians} whileHover="hover">
							<FormattedMessage id="contactPage.firstSection.btn" />
						</motion.button>
					</Link>
				</span>
			</div>

			<div className="row">
				<div className="col-lg-4 contactBox">
					{/* Icon bounces up ´n down infinitely */}
					<motion.section
						animate={{
							y: -30,
							transition: {
								duration: 1,
								repeat: Infinity,
								repeatType: "mirror",
							},
						}}
					>
						<FontAwesomeIcon
							icon={faCommentDots}
							size="7x"
							color={"green"}
							style={{
								borderRadius: "30px",
								border: "green solid 5px",
								padding: "10px",
							}}
						/>
					</motion.section>
					<h2>
						<FormattedMessage id="contactPage.secondSection.firstBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p2" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.firstBox.p3" />
					</p>
				</div>

				<div className="col-lg-4 contactBox">
					{/* Icon bounces up ´n down infinitely starts with slight delay from first */}
					<motion.section
						animate={{
							y: -30,
							transition: {
								delay: 0.33,
								duration: 1,
								repeat: Infinity,
								repeatType: "mirror",
							},
						}}
					>
						<FontAwesomeIcon
							icon={faPhone}
							size="7x"
							color={"green"}
							style={{
								borderRadius: "30px",
								border: "green solid 5px",
								padding: "10px",
							}}
						/>
					</motion.section>
					<h2>
						<FormattedMessage id="contactPage.secondSection.secondBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p2" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.secondBox.p3" />
					</p>
				</div>

				<div className="col-lg-4 contactBox">
					{/* Icon bounces up ´n down infinitely starts with a bit more delay from first */}
					<motion.section
						animate={{
							y: -30,
							transition: {
								delay: 0.66,
								duration: 1,
								repeat: Infinity,
								repeatType: "mirror",
							},
						}}
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							size="7x"
							color={"green"}
							style={{
								borderRadius: "30px",
								border: "green solid 5px",
								padding: "10px",
							}}
						/>
					</motion.section>
					<h2>
						<FormattedMessage id="contactPage.secondSection.thirdBox.heading" />
					</h2>
					<p>
						<FormattedMessage id="contactPage.secondSection.thirdBox.p1" />
					</p>
					<p>
						<FormattedMessage id="contactPage.secondSection.thirdBox.p2" />
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default injectIntl(Contact);
